import type { Campaign, AdSet, Ad, AdAccount } from "../types/advertising"

export const mockAdAccount: AdAccount = {
  id: "acc_123",
  name: "Elías Cardona Marketing",
  currency: "USD",
  timezone: "America/Mexico_City",
  campaigns: [],
  pages: [
    {
      id: "page_elias",
      name: "Elías Cardona - Tutor de Software Testing",
      category: "Education",
      profilePicture: "/placeholder.svg?height=40&width=40",
    },
  ],
}

export const mockCampaigns: Campaign[] = [
  {
    id: "camp_reconocimiento_uno",
    name: "Campaña de reconocimiento 1",
    status: "draft",
    objective: "awareness",
    budgetType: "daily",
    dailyBudget: 50,
    spentBudget: 0,
    currency: "USD",
    startDate: "2024-01-15",
    biddingStrategy: "lowest_cost",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
    createdBy: "user_elias",
    adSets: ["frio_reconocimiento"],
  },
  {
    id: "camp_reconocimiento_dos",
    name: "Campaña de reconocimiento 2",
    status: "draft",
    objective: "awareness",
    budgetType: "daily",
    dailyBudget: 50,
    spentBudget: 0,
    currency: "USD",
    startDate: "2024-01-15",
    biddingStrategy: "lowest_cost",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
    createdBy: "user_elias",
    adSets: ["frio_reconocimiento"],
  },
]

export const mockAdSets: AdSet[] = [
  {
    id: "frio_reconocimiento_uno",
    campaignId: "camp_reconocimiento_uno",
    name: "Conjunto de ads 1",
    status: "draft",
    budgetType: "daily",
    budget: 25,
    spentBudget: 0,
    startDate: "2024-01-15",
    createdAt: "2024-01-10T10:30:00Z",
    updatedAt: "2024-01-10T10:30:00Z",
    ads: ["ad_primera_impresion", "ad_reconocimiento_rhino"],
  },
  {
    id: "frio_reconocimiento_dos",
    campaignId: "camp_reconocimiento_dos",
    name: "Conjunto de ads 2",
    status: "draft",
    budgetType: "daily",
    budget: 25,
    spentBudget: 0,
    startDate: "2024-01-15",
    createdAt: "2024-01-10T10:30:00Z",
    updatedAt: "2024-01-10T10:30:00Z",
    ads: ["ad_primera_impresion", "ad_reconocimiento_rhino"],
  },
]

export const mockAds: Ad[] = [
  {
    id: "ad_primera_impresion",
    adSetId: "frio_reconocimiento_uno",
    campaignId: "camp_reconocimiento_uno",
    name: "Anuncio 1",
    status: "draft",
    creative: {
      id: "creative_primera",
      type: "image",
      branding: {
        pageId: "rhino_training_complex",
        pageName: "Rhino Training Complex",
      },
    },
    createdAt: "2024-01-10T11:00:00Z",
    updatedAt: "2024-01-10T11:00:00Z",
    createdBy: "rhino",
  },
  {
    id: "ad_primera_impresion",
    adSetId: "frio_reconocimiento_dos",
    campaignId: "camp_reconocimiento_dos",
    name: "Anuncio 1",
    status: "draft",
    creative: {
      id: "creative_primera",
      type: "image",
      branding: {
        pageId: "rhino_training_complex",
        pageName: "Rhino Training Complex",
      },
    },
    createdAt: "2024-01-10T11:00:00Z",
    updatedAt: "2024-01-10T11:00:00Z",
    createdBy: "rhino",
  },
]