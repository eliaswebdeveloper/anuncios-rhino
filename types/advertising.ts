export interface Campaign {
  id: string
  name: string
  status: "draft" | "active" | "paused" | "completed"
  objective: "awareness" | "traffic" | "engagement" | "leads" | "conversions" | "sales"
  budgetType: "daily" | "lifetime"
  totalBudget?: number
  dailyBudget?: number
  spentBudget: number
  currency: string
  startDate: string
  endDate?: string
  biddingStrategy: "lowest_cost" | "bid_cap" | "target_cost" | "cost_cap"
  bidAmount?: number
  createdAt: string
  updatedAt: string
  createdBy: string
  adSets: string[] // Array of ad set IDs
}

export interface AdSet {
  id: string
  campaignId: string
  name: string
  status: "draft" | "active" | "paused" | "completed"
  budgetType: "daily" | "lifetime"
  budget: number
  spentBudget: number
  startDate: string
  endDate?: string
  createdAt: string
  updatedAt: string
  ads: string[] // Array of ad IDs
}

export interface Creative {
  id: string
  type: "image" | "video" | "carousel" | "collection"
  branding: {
    pageId: string
    pageName: string
  }
}

export interface Ad {
  id: string
  adSetId: string
  campaignId: string
  name: string
  status: "draft" | "active" | "paused" | "rejected" | "completed"
  creative: Creative
  createdAt: string
  updatedAt: string
  createdBy: string
}

export interface AdAccount {
  id: string
  name: string
  currency: string
  timezone: string
  campaigns: Campaign[]
  pages: {
    id: string
    name: string
    category: string
    profilePicture?: string
  }[]
}

// Utility types for forms and API responses
export type CampaignFormData = Omit<Campaign, "id" | "createdAt" | "updatedAt" | "adSets" | "spentBudget">
export type AdSetFormData = Omit<AdSet, "id" | "createdAt" | "updatedAt" | "ads" | "spentBudget" | "performance">
export type AdFormData = Omit<Ad, "id" | "createdAt" | "updatedAt" | "performance" | "approval">

// API Response types
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  errors?: string[]
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}
