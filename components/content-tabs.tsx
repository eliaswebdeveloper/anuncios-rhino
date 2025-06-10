"use client"

import { BarChart3 } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ContentTabsProps {
  activeTab?: string
  onTabChange?: (tab: string) => void
}

export function ContentTabs({ activeTab = "ad-sets", onTabChange }: ContentTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="w-auto">
      <TabsList className="bg-gray-100">
        <TabsTrigger value="ad-sets" className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4" />
          Conjuntos de anuncios
        </TabsTrigger>
        <TabsTrigger value="ads" className="flex items-center gap-2">
          📄 Anuncios
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
