"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BreadcrumbNavigationProps {
  campaignName: string
  adSetName: string
  adName?: string
  adSetId: string
}

export function BreadcrumbNavigation({ campaignName, adSetName, adName, adSetId }: BreadcrumbNavigationProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Link href="/">
        <Button variant="ghost" size="sm" className="h-auto p-1 text-blue-600 hover:text-blue-800">
          <Home className="w-4 h-4 mr-1" />
          Dashboard
        </Button>
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-blue-600 hover:underline cursor-pointer">{campaignName}</span>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <Link href={`/conjunto-de-anuncios/${adSetId}`}>
        <span className="text-blue-600 hover:underline cursor-pointer">{adSetName}</span>
      </Link>
      {adName && (
        <>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-gray-600">{adName}</span>
        </>
      )}
    </div>
  )
}
