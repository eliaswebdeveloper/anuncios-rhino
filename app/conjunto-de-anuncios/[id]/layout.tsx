"use client"

import type React from "react"
import { useParams, usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { X, Search, Edit, Eye, ChevronRight, Grid3X3, FileText, MoreHorizontal } from "lucide-react"
import { Suspense } from "react"
import { useAdvertisingData } from "../../../lib/hooks/use-advertising-data"
import { getStatusColor, getStatusText } from "../../utils/advertising-helpers"

interface AdSetLayoutProps {
  children: React.ReactNode
}

export default function AdSetLayout({ children }: AdSetLayoutProps) {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()
  const adSetId = params.id as string

  const { getCampaign, getAdSet, getAdsForAdSet } = useAdvertisingData()

  const adSet = getAdSet(adSetId)
  const campaign = adSet ? getCampaign(adSet.campaignId) : null
  const ads = adSet ? getAdsForAdSet(adSet.id) : []

  if (!adSet || !campaign) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold mb-2">Conjunto de anuncios no encontrado</h1>
          <p className="text-gray-600 mb-4">ID buscado: {adSetId}</p>
          <p className="text-sm text-gray-500">IDs disponibles: adset_frio_recognition</p>
          <Link href="/conjunto-de-anuncios/adset_frio_recognition" className="text-blue-600 hover:underline">
            Ir al conjunto de anuncios disponible
          </Link>
        </div>
      </div>
    )
  }

  // Dynamic navigation structure
  const navigationItems = [
    {
      id: "campaign",
      name: campaign.name,
      type: "campaign",
      icon: FileText,
      href: `/conjunto-de-anuncios/${adSetId}/campaign`,
      level: 0,
      status: campaign.status,
    },
    {
      id: "adset",
      name: adSet.name,
      type: "adset",
      icon: Grid3X3,
      href: `/conjunto-de-anuncios/${adSetId}`,
      level: 1,
      status: adSet.status,
    },
    ...ads.map((ad) => ({
      id: ad.id,
      name: ad.name,
      type: "ad" as const,
      icon: FileText,
      href: `/conjunto-de-anuncios/${adSetId}/ads/${ad.id}`,
      level: 2,
      status: ad.status,
    })),
  ]

  const getCurrentItem = () => {
    return navigationItems.find((item) => {
      if (pathname === item.href) return true
      if (item.href !== `/conjunto-de-anuncios/${adSetId}` && pathname.startsWith(item.href)) return true
      return false
    })
  }

  const currentItem = getCurrentItem()

  const handleClose = () => {
    router.push("/")
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-50">
        {/* Top Header */}
        <div className="bg-white border-b">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" onClick={handleClose}>
                  <X className="w-4 h-4" />
                </Button>

                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input placeholder="Buscar" className="pl-10 w-64" />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className={getStatusColor(adSet.status)}>
                  🟢 {getStatusText(adSet.status)}
                </Badge>
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar
                </Button>
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Revisar
                </Button>
              </div>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="px-6 py-2 bg-gray-50 border-t">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-600 hover:underline cursor-pointer">{campaign.name}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                <Grid3X3 className="w-4 h-4" />
                {adSet.name}
              </span>
              {currentItem?.type === "ad" && (
                <>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {currentItem.name}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Left Sidebar - Navigation Tabs */}
          <div className="w-80 bg-white border-r min-h-screen">
            <div className="p-4">
              <div className="space-y-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  const isActive =
                    pathname === item.href ||
                    (item.href !== `/conjunto-de-anuncios/${adSetId}` && pathname.startsWith(item.href))

                  return (
                    <Link key={item.id} href={item.href}>
                      <div
                        className={`flex items-center gap-2 text-sm p-3 rounded-lg cursor-pointer transition-colors ${
                          isActive
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "text-gray-600 hover:bg-gray-50"
                        } ${item.level === 1 ? "ml-4" : item.level === 2 ? "ml-8" : ""}`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="flex-1 truncate">{item.name}</span>
                        <Badge variant="outline" className={`text-xs ${getStatusColor(item.status)}`}>
                          {getStatusText(item.status)}
                        </Badge>
                        {(item.type === "adset" || item.type === "ad") && (
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <MoreHorizontal className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="p-6">{children}</div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}
