"use client"

import { useParams } from "next/navigation"
import { useAdvertisingData } from "../../../lib/ad-sets/hooks"
import { AdSetSettings } from "../../../components/ad-sets/ad-set-settings"

export default function AdSetPage() {
  const params = useParams()
  const adSetId = params.id as string
  const { getAdSet } = useAdvertisingData()

  const adSet = getAdSet(adSetId)

  if (!adSet) {
    return (
      <div className="text-center py-8">
        <h1 className="text-xl font-semibold mb-2">Conjunto de anuncios no encontrado</h1>
        <p className="text-gray-600 mb-4">ID buscado: {adSetId}</p>
        <p className="text-sm text-gray-500">
          Prueba con: <code className="bg-gray-100 px-2 py-1 rounded">adset_frio_recognition</code>
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <AdSetSettings adSet={adSet} />
    </div>
  )
}
