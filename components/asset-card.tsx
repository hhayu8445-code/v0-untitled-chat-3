"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { FrameworkBadge } from "@/components/framework-selector"
import type { Asset } from "@/lib/types"
import { Download, Star, ArrowUpRight, CheckCircle, Sparkles } from "lucide-react"
import { useState } from "react"
import { CoinIcon } from "@/components/coin-icon"
import { motion } from "framer-motion"
import { SeasonalCard } from "@/components/seasonal-card"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Download, Heart, MessageCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

export function AssetCard({ asset }: { asset: any }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col glass-effect border-[hsl(330,100%,65%)]/30 hover:neon-glow transition-all duration-300">
        <CardHeader className="p-4">
          <div className="relative rounded-xl overflow-hidden aspect-video bg-muted">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[hsl(330,100%,65%)]/20 to-[hsl(300,100%,70%)]/20">
              <div className="text-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                <p className="mt-2 text-sm text-muted-foreground">{asset.title || 'Asset Preview'}</p>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold line-clamp-1">{asset.name || 'Sample Asset'}</h3>
            <span className="text-sm font-medium text-[hsl(330,100%,65%)]">FREE</span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
            {asset.description || 'This is a sample description of the asset. FiveM tools provide the best resources for your server.'}
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              {asset.rating || '4.8'}
            </span>
            <span className="flex items-center gap-1">
              <Download className="w-3 h-3" />
              {asset.downloads || '1.2k'}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {asset.likes || '245'}
            </span>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button className="flex-1 bg-[hsl(330,100%,65%)] hover:bg-[hsl(330,100%,55%)] text-white rounded-lg">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" className="border-[hsl(330,100%,65%)] text-[hsl(330,100%,65%)] rounded-lg hover:bg-[hsl(330,100%,65%)]/10">
            <Heart className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
