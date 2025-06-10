"use client"

import { useParams } from "next/navigation"
import { useAdvertisingData } from "../../../../lib/ad-sets/hooks"
import { CampaignSettings } from "../../../../components/ad-sets/campaign-settings"

export default function CampaignPage() {
  const params = useParams()
  const adSetId = params.id as string
  const { getAdSet, getCampaign } = useAdvertisingData()

  const adSet = getAdSet(adSetId)
  const campaign = adSet ? getCampaign(adSet.campaignId) : null

  if (!campaign) {
    return (
      <div className="text-center py-8">
        <h1 className="text-xl font-semibold mb-2">Campaña no encontrada</h1>
        <p className="text-gray-600">No se pudo encontrar la campaña para el conjunto de anuncios: {adSetId}</p>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto">
      <CampaignSettings campaign={campaign} />
    </div>
  )
}
