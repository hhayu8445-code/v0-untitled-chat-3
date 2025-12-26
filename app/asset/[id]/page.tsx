"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FormattedText } from "@/components/formatted-text"
import { LinkvertiseAd } from "@/components/linkvertise-ad"
import { Download, Star, Eye, Coins, Package, Sparkles, FileText, History } from "lucide-react"
import Image from "next/image"

export default function AssetDetailPage() {
  const params = useParams()
  const [asset, setAsset] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<"description" | "features" | "installation" | "changelog">("description")

  useEffect(() => {
    if (params.id) {
      fetch(`/api/assets/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setAsset(data.asset)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="md:ml-72">
          <Header />
          <div className="p-6 flex items-center justify-center min-h-[60vh]">
            <div className="animate-spin h-12 w-12 border-4 border-primary border-t-transparent rounded-full" />
          </div>
        </main>
      </div>
    )
  }

  if (!asset) {
    return (
      <div className="min-h-screen bg-background">
        <Sidebar />
        <main className="md:ml-72">
          <Header />
          <div className="p-6 text-center">
            <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold">Asset Not Found</h2>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="md:ml-72">
        <Header />
        <div className="p-6 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div className="glass rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  {asset.thumbnail && (
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                      <Image src={asset.thumbnail} alt={asset.title} fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{asset.title}</h1>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="outline" className="capitalize">{asset.category}</Badge>
                      <Badge variant="outline">{asset.framework}</Badge>
                      <span className="text-sm text-muted-foreground">v{asset.version || "1.0.0"}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {asset.downloads || 0} downloads
                  </span>
                  <span className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    {asset.views || 0} views
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    {asset.rating || "5.0"}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="glass rounded-xl overflow-hidden">
                <div className="flex border-b border-border/50">
                  {[
                    { id: "description", label: "Description", icon: FileText },
                    { id: "features", label: "Features", icon: Sparkles },
                    { id: "installation", label: "Installation", icon: Package },
                    { id: "changelog", label: "Changelog", icon: History },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "text-primary border-b-2 border-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>

                <div className="p-6">
                  <LinkvertiseAd />
                  {activeTab === "description" && (
                    <FormattedText content={asset.description || "No description available."} />
                  )}
                  {activeTab === "features" && (
                    <FormattedText content={asset.features || "No features listed."} />
                  )}
                  {activeTab === "installation" && (
                    <FormattedText content={asset.installation || "No installation instructions."} />
                  )}
                  {activeTab === "changelog" && (
                    <FormattedText content={asset.changelog || "No changelog available."} />
                  )}
                  <LinkvertiseAd />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Download Card */}
              <div className="glass rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center gap-2 text-3xl font-bold mb-2">
                    <Coins className="h-8 w-8 text-yellow-500" />
                    {asset.coin_price || 0}
                  </div>
                  <p className="text-sm text-muted-foreground">Coins Required</p>
                </div>
                <Button className="w-full gap-2" size="lg">
                  <Download className="h-5 w-5" />
                  Download Now
                </Button>
              </div>

              {/* Author Card */}
              {asset.author && (
                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Author</h3>
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
                      {asset.author.avatar && (
                        <Image src={asset.author.avatar} alt="" fill className="object-cover" unoptimized />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{asset.author.username}</p>
                      <p className="text-sm text-muted-foreground capitalize">{asset.author.membership || "free"}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Tags */}
              {asset.tags && asset.tags.length > 0 && (
                <div className="glass rounded-xl p-6">
                  <h3 className="font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {asset.tags.map((tag: string, i: number) => (
                      <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4">Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium capitalize">{asset.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Framework</span>
                    <span className="font-medium">{asset.framework}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version</span>
                    <span className="font-medium">{asset.version || "1.0.0"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant={asset.status === "active" ? "default" : "secondary"} className="capitalize">
                      {asset.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
