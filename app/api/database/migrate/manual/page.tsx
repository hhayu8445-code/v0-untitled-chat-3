"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Database, Check, X, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface MigrationResult {
  table: string
  status: "success" | "error" | "skipped"
  migrated?: number
  attempted?: number
  error?: string
  message?: string
}

export default function ManualMigrationPage() {
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<MigrationResult[]>([])
  const [error, setError] = useState<string | null>(null)

  const runMigration = async () => {
    setLoading(true)
    setError(null)
    setResults([])

    try {
      const response = await fetch("/api/database/migrate-old-data")
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Migration failed")
      }

      setResults(data.results)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const successCount = results.filter((r) => r.status === "success").length
  const errorCount = results.filter((r) => r.status === "error").length
  const totalMigrated = results.reduce((sum, r) => sum + (r.migrated || 0), 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <Card className="border-purple-500/20 bg-slate-900/50 backdrop-blur">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Database className="h-8 w-8 text-purple-400" />
              <div>
                <CardTitle className="text-2xl text-white">Database Migration</CardTitle>
                <CardDescription className="text-slate-400">
                  Migrate data from old Supabase database to new database
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert className="border-blue-500/20 bg-blue-500/10">
              <AlertCircle className="h-4 w-4 text-blue-400" />
              <AlertDescription className="text-blue-300">
                Make sure you have added{" "}
                <code className="rounded bg-blue-500/20 px-1 py-0.5">OLD_SUPABASE_SERVICE_ROLE_KEY</code> to your
                environment variables
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button
                onClick={runMigration}
                disabled={loading}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Migrating...
                  </>
                ) : (
                  <>
                    <Database className="mr-2 h-4 w-4" />
                    Start Migration
                  </>
                )}
              </Button>
            </div>

            {error && (
              <Alert variant="destructive">
                <X className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {results.length > 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="border-green-500/20 bg-green-500/10">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{successCount}</div>
                        <div className="text-sm text-green-300">Success</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-red-500/20 bg-red-500/10">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-400">{errorCount}</div>
                        <div className="text-sm text-red-300">Errors</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-purple-500/20 bg-purple-500/10">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{totalMigrated}</div>
                        <div className="text-sm text-purple-300">Records</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-slate-700 bg-slate-800/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Migration Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {results.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-900/50 p-3"
                        >
                          <div className="flex items-center gap-3">
                            {result.status === "success" && <Check className="h-5 w-5 text-green-400" />}
                            {result.status === "error" && <X className="h-5 w-5 text-red-400" />}
                            {result.status === "skipped" && <AlertCircle className="h-5 w-5 text-yellow-400" />}
                            <span className="font-mono text-sm text-white">{result.table}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {result.migrated !== undefined && (
                              <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                                {result.migrated} records
                              </Badge>
                            )}
                            <Badge
                              variant={
                                result.status === "success"
                                  ? "default"
                                  : result.status === "error"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {result.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
