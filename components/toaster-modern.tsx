import { Toaster as Sonner } from "sonner"

export function Toaster() {
  return (
    <Sonner
      position="top-right"
      toastOptions={{
        classNames: {
          toast: "glass border-primary/20 backdrop-blur-xl",
          title: "text-foreground font-semibold",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground hover:bg-primary/90",
          cancelButton: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
          error: "border-destructive/30 bg-destructive/10",
          success: "border-success/30 bg-success/10",
          warning: "border-warning/30 bg-warning/10",
          info: "border-info/30 bg-info/10",
        },
      }}
    />
  )
}
