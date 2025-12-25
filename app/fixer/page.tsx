"use client";

import { useEffect } from "react";

export default function FixerPage() {
  useEffect(() => {
    window.location.replace("https://fixer.boostfivem.com/");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">🔧 Redirecting to FIXER V 2.5...</h1>
        <p className="text-muted-foreground">Please wait...</p>
      </div>
    </div>
  );
}
