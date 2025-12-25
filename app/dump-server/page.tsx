"use client";

import { useEffect } from "react";

export default function DumpServerPage() {
  useEffect(() => {
    window.location.replace("http://168.110.211.50:5000/");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">🗄️ Redirecting to Dump Server...</h1>
        <p className="text-muted-foreground">Please wait...</p>
      </div>
    </div>
  );
}
