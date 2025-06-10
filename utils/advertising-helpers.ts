import type { Campaign, AdSet, Ad } from "../types/advertising"

export const formatCurrency = (amount: number, currency = "USD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

export const formatPercentage = (value: number): string => {
  return `${(value * 100).toFixed(2)}%`
}

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat("en-US").format(value)
}

export const getStatusColor = (status: string): string => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800"
    case "draft":
      return "bg-yellow-100 text-yellow-800"
    case "paused":
      return "bg-gray-100 text-gray-800"
    case "completed":
      return "bg-blue-100 text-blue-800"
    case "rejected":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export const getStatusText = (status: string): string => {
  switch (status) {
    case "active":
      return "Activo"
    case "draft":
      return "En borrador"
    case "paused":
      return "Pausado"
    case "completed":
      return "Completado"
    case "rejected":
      return "Rechazado"
    default:
      return status
  }
}

export const getObjectiveText = (objective: string): string => {
  switch (objective) {
    case "awareness":
      return "Reconocimiento de marca"
    case "traffic":
      return "Tráfico"
    case "engagement":
      return "Interacción"
    case "leads":
      return "Generación de clientes potenciales"
    case "conversions":
      return "Conversiones"
    case "sales":
      return "Ventas"
    default:
      return objective
  }
}

export const calculateCampaignScore = (campaign: Campaign, adSets: AdSet[]): number => {
  // Simple scoring algorithm based on campaign completeness
  let score = 0

  // Basic campaign setup (30 points)
  if (campaign.name) score += 10
  if (campaign.objective) score += 10
  if (campaign.budgetType && (campaign.dailyBudget || campaign.totalBudget)) score += 10

  // Targeting setup (25 points)
  if (campaign.targetAudience.locations.length > 0) score += 5
  if (campaign.targetAudience.interests.length > 0) score += 10
  if (campaign.targetAudience.ageMin && campaign.targetAudience.ageMax) score += 10

  // Ad sets setup (25 points)
  const campaignAdSets = adSets.filter((adSet) => adSet.campaignId === campaign.id)
  if (campaignAdSets.length > 0) score += 15
  if (campaignAdSets.some((adSet) => adSet.ads.length > 0)) score += 10

  // Advanced settings (20 points)
  if (campaign.biddingStrategy) score += 10
  if (campaign.schedule.timezone) score += 5
  if (campaign.optimization.optimizationGoal) score += 5

  return Math.min(score, 100)
}

export const validateCampaignData = (campaign: Partial<Campaign>): string[] => {
  const errors: string[] = []

  if (!campaign.name?.trim()) {
    errors.push("El nombre de la campaña es requerido")
  }

  if (!campaign.objective) {
    errors.push("El objetivo de la campaña es requerido")
  }

  if (!campaign.budgetType) {
    errors.push("El tipo de presupuesto es requerido")
  }

  if (campaign.budgetType === "daily" && (!campaign.dailyBudget || campaign.dailyBudget <= 0)) {
    errors.push("El presupuesto diario debe ser mayor a 0")
  }

  if (campaign.budgetType === "lifetime" && (!campaign.totalBudget || campaign.totalBudget <= 0)) {
    errors.push("El presupuesto total debe ser mayor a 0")
  }

  return errors
}

export const validateAdSetData = (adSet: Partial<AdSet>): string[] => {
  const errors: string[] = []

  if (!adSet.name?.trim()) {
    errors.push("El nombre del conjunto de anuncios es requerido")
  }

  if (!adSet.budget || adSet.budget <= 0) {
    errors.push("El presupuesto debe ser mayor a 0")
  }

  if (!adSet.targeting?.ageMin || !adSet.targeting?.ageMax) {
    errors.push("El rango de edad es requerido")
  }

  if (adSet.targeting?.ageMin && adSet.targeting?.ageMax && adSet.targeting.ageMin > adSet.targeting.ageMax) {
    errors.push("La edad mínima no puede ser mayor a la edad máxima")
  }

  return errors
}

export const validateAdData = (ad: Partial<Ad>): string[] => {
  const errors: string[] = []

  if (!ad.name?.trim()) {
    errors.push("El nombre del anuncio es requerido")
  }

  if (!ad.creative?.copy?.headline?.trim()) {
    errors.push("El titular del anuncio es requerido")
  }

  if (!ad.creative?.copy?.primaryText?.trim()) {
    errors.push("El texto principal del anuncio es requerido")
  }

  if (!ad.creative?.copy?.websiteUrl?.trim()) {
    errors.push("La URL del sitio web es requerida")
  }

  if (!ad.creative?.callToAction?.type) {
    errors.push("El tipo de llamada a la acción es requerido")
  }

  return errors
}
