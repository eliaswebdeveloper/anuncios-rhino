"use client"

import { useState } from "react"
import type { Campaign } from "../../app/types/campaign"

const MOCK_CAMPAIGNS: Campaign[] = [
  {
    id: "1",
    name: "Nueva campaña de Interacción",
    active: true,
    status: "En borrador",
    strategy: "Con estrategia d...",
    budget: "Con el presupue...",
  },
  {
    id: "2",
    name: "Nueva campaña de Tráfico",
    active: true,
    status: "En borrador",
    strategy: "Con estrategia d...",
    budget: "Con el presupue...",
  },
  {
    id: "3",
    name: "Reconocimiento de rhino",
    active: true,
    status: "En borrador",
    strategy: "Con estrategia d...",
    budget: "Con el presupue...",
  },
]

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(MOCK_CAMPAIGNS)

  const toggleCampaignActive = (id: string) => {
    setCampaigns((prev) =>
      prev.map((campaign) => (campaign.id === id ? { ...campaign, active: !campaign.active } : campaign)),
    )
  }

  return {
    campaigns,
    campaignCount: campaigns.length,
    toggleCampaignActive,
  }
}
