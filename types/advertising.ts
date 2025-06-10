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
  targetAudience: {
    ageMin: number
    ageMax: number
    genders: ("male" | "female" | "all")[]
    locations: string[]
    interests: string[]
    behaviors: string[]
    customAudiences: string[]
    lookalikeSources: string[]
  }
  schedule: {
    timezone: string
    dayParting?: {
      [key: string]: { start: string; end: string }[]
    }
  }
  optimization: {
    deliveryType: "standard" | "accelerated"
    optimizationGoal: string
    attributionWindow: "1d" | "7d" | "28d"
  }
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
  targeting: {
    ageMin: number
    ageMax: number
    genders: ("male" | "female" | "all")[]
    locations: {
      countries: string[]
      regions: string[]
      cities: string[]
      radius?: number
    }
    demographics: {
      education: string[]
      jobTitles: string[]
      interests: string[]
      behaviors: string[]
    }
    customAudiences: string[]
    lookalikeSources: string[]
    excludedAudiences: string[]
  }
  placements: {
    facebook: {
      feed: boolean
      stories: boolean
      instream: boolean
      search: boolean
      messages: boolean
    }
    instagram: {
      feed: boolean
      stories: boolean
      explore: boolean
      reels: boolean
    }
    messenger: boolean
    audienceNetwork: boolean
  }
  optimization: {
    objective: "impressions" | "reach" | "clicks" | "conversions" | "value"
    bidStrategy: "lowest_cost" | "bid_cap" | "target_cost"
    bidAmount?: number
    costControl?: number
  }
  schedule: {
    timezone: string
    dayParting?: {
      [key: string]: { start: string; end: string }[]
    }
    flightDates?: {
      start: string
      end: string
    }[]
  }
  performance: {
    impressions: number
    reach: number
    clicks: number
    ctr: number
    cpc: number
    cpm: number
    conversions: number
    costPerConversion: number
    roas?: number
  }
  createdAt: string
  updatedAt: string
  ads: string[] // Array of ad IDs
}

export interface Creative {
  id: string
  type: "image" | "video" | "carousel" | "collection"
  assets: {
    images?: {
      url: string
      alt: string
      dimensions: { width: number; height: number }
    }[]
    videos?: {
      url: string
      thumbnail: string
      duration: number
      dimensions: { width: number; height: number }
    }[]
  }
  copy: {
    headline: string
    primaryText: string
    description?: string
    displayLink?: string
    websiteUrl: string
  }
  callToAction: {
    type: "learn_more" | "sign_up" | "download" | "contact_us" | "shop_now" | "book_now" | "get_quote"
    text?: string
  }
  branding: {
    pageId: string
    pageName: string
    profileImage?: string
  }
}

export interface Ad {
  id: string
  adSetId: string
  campaignId: string
  name: string
  status: "draft" | "active" | "paused" | "rejected" | "completed"
  creative: Creative
  tracking: {
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
    utmTerm?: string
    utmContent?: string
    pixelId?: string
    conversionEvents: string[]
    customParameters: { [key: string]: string }
  }
  performance: {
    impressions: number
    reach: number
    clicks: number
    ctr: number
    cpc: number
    cpm: number
    conversions: number
    costPerConversion: number
    videoViews?: number
    videoViewRate?: number
    engagements?: number
    shares?: number
    comments?: number
    likes?: number
  }
  testing: {
    isControl?: boolean
    testGroup?: string
    splitTestId?: string
  }
  approval: {
    status: "pending" | "approved" | "rejected"
    reviewedAt?: string
    rejectionReason?: string
  }
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
