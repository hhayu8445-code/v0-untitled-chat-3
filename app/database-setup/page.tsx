"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, Database, Loader2, AlertCircle } from "lucide-react"

export default function DatabaseSetupPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const runMigration = async () => {
    setStatus("loading")
    setMessage("Running database migration...")

    try {
      const response = await fetch("/api/database/migrate", {
        method: "POST",
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setMessage("Database setup completed successfully! All tables have been created with proper RLS policies.")
      } else {
        setStatus("error")
        setMessage(data.error || "Migration failed")
      }
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Failed to run migration")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-3xl">
            <Database className="h-8 w-8 text-primary" />
            Database Setup - FiveM Tools V7
          </CardTitle>
          <CardDescription className="text-base">
            Initialize your Supabase database with all required tables, indexes, and Row Level Security policies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">This will create:</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>20+ database tables with proper relationships and constraints</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Row Level Security (RLS) policies for data protection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Performance indexes for faster queries</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Initial seed data (forum categories, spin wheel prizes, etc.)</span>
              </li>
            </ul>
          </div>

          {status !== "idle" && (
            <Alert variant={status === "error" ? "destructive" : "default"}>
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <CheckCircle2 className="h-4 w-4 text-success" />}
              {status === "error" && <AlertCircle className="h-4 w-4" />}
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}

          <Button
            onClick={runMigration}
            disabled={status === "loading" || status === "success"}
            className="w-full"
            size="lg"
          >
            {status === "loading" && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {status === "success" ? "Setup Complete!" : "Run Database Migration"}
          </Button>

          {status === "success" && (
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">Your database is ready to use!</p>
              <Button variant="outline" onClick={() => (window.location.href = "/")} className="mt-2">
                Go to Homepage
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
