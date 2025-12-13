"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"

export default function MigrateDataPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  const handleMigration = async () => {
    setIsLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await fetch("/api/migrate-data", {
        method: "POST",
      })

      const data = await response.json()

      if (data.success) {
        setResults(data.results)
      } else {
        setError(data.error || "Migration failed")
      }
    } catch (err: any) {
      setError(err.message || "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Data Migration Tool</CardTitle>
          <CardDescription>
            Migrate all data from old database (linnqtixdfjwbrixitrb) to new database (csnogkgzziimwvwhvrhb)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This will copy all data from your old Supabase database to the new one. The migration includes:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Users</li>
              <li>Assets</li>
              <li>Forum Categories, Threads & Replies</li>
              <li>Downloads & Likes</li>
              <li>Notifications & Activities</li>
              <li>Coin Transactions</li>
              <li>Spin Wheel Data</li>
              <li>Announcements & Testimonials</li>
            </ul>
          </div>

          <Button onClick={handleMigration} disabled={isLoading} size="lg" className="w-full">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Migrating Data...
              </>
            ) : (
              "Start Migration"
            )}
          </Button>

          {error && (
            <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive rounded-lg">
              <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-destructive">Migration Failed</p>
                <p className="text-sm text-destructive/90">{error}</p>
              </div>
            </div>
          )}

          {results && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">Migration Completed Successfully!</p>
                  <p className="text-sm text-green-600 dark:text-green-500">
                    All data has been migrated to your new database
                  </p>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Migration Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(results).map(([table, count]) => (
                      <div key={table} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                        <span className="text-sm font-medium capitalize">{table.replace(/_/g, " ")}</span>
                        <span className="text-sm font-bold text-primary">{count as number} records</span>
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
  )
}
