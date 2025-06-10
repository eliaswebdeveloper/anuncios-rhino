"use client"

import { useParams } from "next/navigation"
import { useAdvertisingData } from "../../../../../lib/hooks/use-advertising-data"
import { IndividualAdSettings } from "../../../../../components/ad-sets/individual-ad-settings"

export default function IndividualAdPage() {
  const params = useParams()
  const adId = params.adId as string
  const { getAd } = useAdvertisingData()

  const ad = getAd(adId)

  if (!ad) {
    return (
      <div className="text-center py-8">
        <h1 className="text-xl font-semibold mb-2">Anuncio no encontrado</h1>
        <p className="text-gray-600 mb-4">ID buscado: {adId}</p>
        <p className="text-sm text-gray-500">
          IDs disponibles: <code className="bg-gray-100 px-2 py-1 rounded">ad_primera_impresion</code>,{" "}
          <code className="bg-gray-100 px-2 py-1 rounded">ad_reconocimiento_rhino</code>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <IndividualAdSettings ad={ad} />
    </div>
  )
}
