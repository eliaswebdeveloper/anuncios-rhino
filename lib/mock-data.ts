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
    id: "camp_rhino_recognition",
    name: "Campaña",
    status: "draft",
    objective: "awareness",
    budgetType: "daily",
    dailyBudget: 50,
    spentBudget: 0,
    currency: "USD",
    startDate: "2024-01-15",
    biddingStrategy: "lowest_cost",
    targetAudience: {
      ageMin: 25,
      ageMax: 55,
      genders: ["all"],
      locations: ["Mexico", "Colombia", "Argentina"],
      interests: ["Software Testing", "Quality Assurance", "Programming"],
      behaviors: ["Technology Early Adopters"],
      customAudiences: [],
      lookalikeSources: [],
    },
    schedule: {
      timezone: "America/Mexico_City",
    },
    optimization: {
      deliveryType: "standard",
      optimizationGoal: "impressions",
      attributionWindow: "7d",
    },
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z",
    createdBy: "user_elias",
    adSets: ["adset_frio_recognition"],
  },
]

export const mockAdSets: AdSet[] = [
  {
    id: "adset_frio_recognition",
    campaignId: "camp_rhino_recognition",
    name: "Conjunto de ads",
    status: "draft",
    budgetType: "daily",
    budget: 25,
    spentBudget: 0,
    startDate: "2024-01-15",
    targeting: {
      ageMin: 25,
      ageMax: 45,
      genders: ["all"],
      locations: {
        countries: ["Mexico", "Colombia"],
        regions: [],
        cities: [],
      },
      demographics: {
        education: ["College Graduate"],
        jobTitles: ["Software Developer", "QA Engineer"],
        interests: ["Software Testing", "Automation"],
        behaviors: ["Technology Early Adopters"],
      },
      customAudiences: [],
      lookalikeSources: [],
      excludedAudiences: [],
    },
    placements: {
      facebook: {
        feed: true,
        stories: false,
        instream: false,
        search: false,
        messages: false,
      },
      instagram: {
        feed: true,
        stories: false,
        explore: false,
        reels: false,
      },
      messenger: false,
      audienceNetwork: false,
    },
    optimization: {
      objective: "impressions",
      bidStrategy: "lowest_cost",
    },
    schedule: {
      timezone: "America/Mexico_City",
    },
    performance: {
      impressions: 0,
      reach: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conversions: 0,
      costPerConversion: 0,
    },
    createdAt: "2024-01-10T10:30:00Z",
    updatedAt: "2024-01-10T10:30:00Z",
    ads: ["ad_primera_impresion", "ad_reconocimiento_rhino"],
  },
]

export const mockAds: Ad[] = [
  {
    id: "ad_primera_impresion",
    adSetId: "adset_frio_recognition",
    campaignId: "camp_rhino_recognition",
    name: "Anuncio 1",
    status: "draft",
    creative: {
      id: "creative_primera",
      type: "image",
      assets: {
        images: [
          {
            url: "/placeholder.svg?height=400&width=600",
            alt: "Software Testing Course",
            dimensions: { width: 600, height: 400 },
          },
        ],
      },
      copy: {
        headline: "Aprende Software Testing",
        primaryText: "Domina las técnicas de testing más demandadas en la industria. Curso completo con certificación.",
        description: "Desde testing manual hasta automatización",
        displayLink: "eliascardona.com",
        websiteUrl: "https://eliascardona.com/curso-testing",
      },
      callToAction: {
        type: "learn_more",
        text: "Más información",
      },
      branding: {
        pageId: "page_elias",
        pageName: "Elías Cardona - Tutor de Software Testing",
      },
    },
    tracking: {
      utmSource: "facebook",
      utmMedium: "cpc",
      utmCampaign: "reconocimiento_rhino",
      utmContent: "primera_impresion",
      conversionEvents: ["PageView", "Lead"],
      customParameters: {},
    },
    performance: {
      impressions: 0,
      reach: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conversions: 0,
      costPerConversion: 0,
    },
    testing: {},
    approval: {
      status: "pending",
    },
    createdAt: "2024-01-10T11:00:00Z",
    updatedAt: "2024-01-10T11:00:00Z",
    createdBy: "user_elias",
  },
]
