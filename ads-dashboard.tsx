"use client"

import { useState } from "react"
import { TopNavigation } from "./components/top-navigation"
import { Sidebar } from "./components/sidebar"
import { ContentTabs } from "./components/content-tabs"
import { DateRangePicker } from "./components/date-range-picker"
import { ActionBar } from "./components/action-bar"
import { CampaignTable } from "./components/campaign-table"
import { useRouter } from "next/navigation"
import { useAdvertisingData } from "./lib/hooks/use-advertising-data"

export default function AdsDashboard() {
  const router = useRouter()
  const { campaigns, adSets, getAdSetsForCampaign } = useAdvertisingData()
  const [selectedCampaigns, setSelectedCampaigns] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("ad-sets")

  // Convert campaigns to the format expected by the table
  const displayCampaigns = campaigns.map((campaign) => ({
    id: campaign.id,
    name: campaign.name,
    active: campaign.status === "active",
    status: campaign.status === "draft" ? "En borrador" : campaign.status,
    strategy: "Con estrategia d...",
    budget: "Con el presupue...",
  }))

  const handleToggleSelect = (id: string) => {
    setSelectedCampaigns((prev) => (prev.includes(id) ? prev.filter((campaignId) => campaignId !== id) : [...prev, id]))
  }

  const handleToggleSelectAll = () => {
    setSelectedCampaigns((prev) => (prev.length === campaigns.length ? [] : campaigns.map((c) => c.id)))
  }

  const handleCampaignClick = (campaignId: string) => {
    // Navigate to the first ad set of the campaign
    const campaignAdSets = getAdSetsForCampaign(campaignId)
    if (campaignAdSets.length > 0) {
      router.push(`/conjunto-de-anuncios/${campaignAdSets[0].id}`)
    }
  }

  const handleSearch = (query: string) => {
    console.log("Searching for:", query)
    // Implement search logic
  }

  const handleSort = (column: string) => {
    console.log("Sorting by:", column)
    // Implement sort logic
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation onSearch={handleSearch} />

      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <ContentTabs activeTab={activeTab} onTabChange={setActiveTab} />
            <DateRangePicker />
          </div>

          <ActionBar
            onCreateClick={() => console.log("Create campaign")}
            onDuplicateClick={() => console.log("Duplicate campaigns")}
            onEditClick={() => console.log("Edit campaigns")}
            onABTestClick={() => console.log("A/B Test campaigns")}
          />

          <CampaignTable
            campaigns={displayCampaigns}
            selectedCampaigns={selectedCampaigns}
            onToggleActive={() => {}}
            onToggleSelect={handleToggleSelect}
            onToggleSelectAll={handleToggleSelectAll}
            onSort={handleSort}
            onCampaignClick={handleCampaignClick}
          />
        </div>
      </div>
    </div>
  )
}
