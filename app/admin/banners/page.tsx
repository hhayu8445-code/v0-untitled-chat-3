"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Plus, Pencil, Trash2, ImageIcon, LinkIcon, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { toast } from "sonner"

interface Banner {
  id: string
  title: string
  image_url: string
  link: string
  position: string
  is_active: boolean
  sort_order: number
  created_at: string
}

export default function AdminBannersPage() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingBanner, setEditingBanner] = useState<Banner | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    link: "",
    position: "top",
    sort_order: 0,
  })

  useEffect(() => {
    fetchBanners()
  }, [])

  const fetchBanners = async () => {
    try {
      const res = await fetch("/api/banners")
      const data = await res.json()
      setBanners(data.banners || [])
    } catch (error) {
      console.error("Failed to fetch banners:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const method = editingBanner ? "PUT" : "POST"
      const body = editingBanner ? { id: editingBanner.id, ...formData } : formData

      const res = await fetch("/api/banners", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        toast.success(editingBanner ? "Banner updated!" : "Banner created!")
        fetchBanners()
        setIsDialogOpen(false)
        resetForm()
      } else {
        toast.error("Failed to save banner")
      }
    } catch (error) {
      toast.error("An error occurred")
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this banner?")) return

    try {
      const res = await fetch(`/api/banners?id=${id}`, { method: "DELETE" })
      if (res.ok) {
        toast.success("Banner deleted!")
        fetchBanners()
      } else {
        toast.error("Failed to delete banner")
      }
    } catch (error) {
      toast.error("An error occurred")
    }
  }

  const toggleActive = async (banner: Banner) => {
    try {
      const res = await fetch("/api/banners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: banner.id, is_active: !banner.is_active }),
      })

      if (res.ok) {
        toast.success(`Banner ${banner.is_active ? "disabled" : "enabled"}!`)
        fetchBanners()
      }
    } catch (error) {
      toast.error("An error occurred")
    }
  }

  const resetForm = () => {
    setFormData({ title: "", image_url: "", link: "", position: "top", sort_order: 0 })
    setEditingBanner(null)
  }

  const openEditDialog = (banner: Banner) => {
    setEditingBanner(banner)
    setFormData({
      title: banner.title || "",
      image_url: banner.image_url,
      link: banner.link || "",
      position: banner.position,
      sort_order: banner.sort_order,
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Banner Management</h1>
                <p className="text-muted-foreground mt-1">Manage promotional banners across the site</p>
              </div>
              <Dialog
                open={isDialogOpen}
                onOpenChange={(open) => {
                  setIsDialogOpen(open)
                  if (!open) resetForm()
                }}
              >
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Banner
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-card border-border">
                  <DialogHeader>
                    <DialogTitle>{editingBanner ? "Edit Banner" : "Add New Banner"}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Title (Optional)</Label>
                      <Input
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Banner title"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image URL *</Label>
                      <Input
                        value={formData.image_url}
                        onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                        placeholder="https://example.com/banner.png"
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Link URL (Optional)</Label>
                      <Input
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        placeholder="https://example.com"
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <Select
                          value={formData.position}
                          onValueChange={(value) => setFormData({ ...formData, position: value })}
                        >
                          <SelectTrigger className="bg-background border-border">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            <SelectItem value="top">Top Banner</SelectItem>
                            <SelectItem value="sidebar">Sidebar</SelectItem>
                            <SelectItem value="footer">Footer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Sort Order</Label>
                        <Input
                          type="number"
                          value={formData.sort_order}
                          onChange={(e) =>
                            setFormData({ ...formData, sort_order: Number.parseInt(e.target.value) || 0 })
                          }
                          className="bg-background border-border"
                        />
                      </div>
                    </div>
                    {formData.image_url && (
                      <div className="space-y-2">
                        <Label>Preview</Label>
                        <div className="rounded-lg overflow-hidden border border-border">
                          <img
                            src={formData.image_url || "/placeholder.svg"}
                            alt="Preview"
                            className="w-full h-32 object-cover"
                            onError={(e) => {
                              ;(e.target as HTMLImageElement).src = "/celebratory-banner.png"
                            }}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex gap-2 justify-end">
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">{editingBanner ? "Update Banner" : "Create Banner"}</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            {/* Banners Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="bg-card/50 border-border animate-pulse">
                    <div className="h-40 bg-muted rounded-t-lg" />
                    <CardContent className="p-4 space-y-2">
                      <div className="h-4 bg-muted rounded w-3/4" />
                      <div className="h-3 bg-muted rounded w-1/2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : banners.length === 0 ? (
              <Card className="bg-card/50 border-border">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No banners yet</p>
                  <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                    Add Your First Banner
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {banners.map((banner) => (
                  <Card key={banner.id} className="bg-card/50 border-border overflow-hidden group">
                    <div className="relative">
                      <img
                        src={banner.image_url || "/placeholder.svg"}
                        alt={banner.title || "Banner"}
                        className="w-full h-40 object-cover"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).src = "/celebratory-banner.png"
                        }}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="icon" variant="secondary" onClick={() => openEditDialog(banner)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="destructive" onClick={() => handleDelete(banner.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2" variant={banner.is_active ? "default" : "secondary"}>
                        {banner.position}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="min-w-0 flex-1">
                          <p className="font-medium truncate">{banner.title || "Untitled Banner"}</p>
                          {banner.link && (
                            <p className="text-xs text-muted-foreground truncate flex items-center gap-1 mt-1">
                              <LinkIcon className="h-3 w-3" />
                              {banner.link}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch checked={banner.is_active} onCheckedChange={() => toggleActive(banner)} />
                          {banner.is_active ? (
                            <Eye className="h-4 w-4 text-green-500" />
                          ) : (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
