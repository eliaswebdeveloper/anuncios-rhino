"use client"

import { useState, useCallback } from "react"
import type { Campaign, AdSet, Ad, AdAccount } from "../types/advertising"
import { mockAdAccount, mockCampaigns, mockAdSets, mockAds } from "../data/mock-data"

export function useAdvertisingData() {
  const [account] = useState<AdAccount>(mockAdAccount)
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns)
  const [adSets, setAdSets] = useState<AdSet[]>(mockAdSets)
  const [ads, setAds] = useState<Ad[]>(mockAds)

  // Get campaign by ID
  const getCampaign = useCallback(
    (campaignId: string): Campaign | null => {
      return campaigns.find((campaign) => campaign.id === campaignId) || null
    },
    [campaigns],
  )

  // Get ad set by ID
  const getAdSet = useCallback(
    (adSetId: string): AdSet | null => {
      return adSets.find((adSet) => adSet.id === adSetId) || null
    },
    [adSets],
  )

  // Get ad by ID
  const getAd = useCallback(
    (adId: string): Ad | null => {
      return ads.find((ad) => ad.id === adId) || null
    },
    [ads],
  )

  // Get ad sets for a campaign
  const getAdSetsForCampaign = useCallback(
    (campaignId: string): AdSet[] => {
      return adSets.filter((adSet) => adSet.campaignId === campaignId)
    },
    [adSets],
  )

  // Get ads for an ad set
  const getAdsForAdSet = useCallback(
    (adSetId: string): Ad[] => {
      return ads.filter((ad) => ad.adSetId === adSetId)
    },
    [ads],
  )

  // Update campaign
  const updateCampaign = useCallback((campaignId: string, updates: Partial<Campaign>) => {
    setCampaigns((prev) =>
      prev.map((campaign) =>
        campaign.id === campaignId ? { ...campaign, ...updates, updatedAt: new Date().toISOString() } : campaign,
      ),
    )
  }, [])

  // Update ad set
  const updateAdSet = useCallback((adSetId: string, updates: Partial<AdSet>) => {
    setAdSets((prev) =>
      prev.map((adSet) =>
        adSet.id === adSetId ? { ...adSet, ...updates, updatedAt: new Date().toISOString() } : adSet,
      ),
    )
  }, [])

  // Update ad
  const updateAd = useCallback((adId: string, updates: Partial<Ad>) => {
    setAds((prev) =>
      prev.map((ad) => (ad.id === adId ? { ...ad, ...updates, updatedAt: new Date().toISOString() } : ad)),
    )
  }, [])

  // Create new campaign
  const createCampaign = useCallback(
    (campaignData: Omit<Campaign, "id" | "createdAt" | "updatedAt" | "adSets" | "spentBudget">) => {
      const newCampaign: Campaign = {
        ...campaignData,
        id: `camp_${Date.now()}`,
        spentBudget: 0,
        adSets: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      setCampaigns((prev) => [...prev, newCampaign])
      return newCampaign
    },
    [],
  )

  // Create new ad set
  const createAdSet = useCallback(
    (adSetData: Omit<AdSet, "id" | "createdAt" | "updatedAt" | "ads" | "spentBudget" | "performance">) => {
      const newAdSet: AdSet = {
        ...adSetData,
        id: `adset_${Date.now()}`,
        spentBudget: 0,
        ads: [],
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
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }

      setAdSets((prev) => [...prev, newAdSet])
      setCampaigns((prev) =>
        prev.map((campaign) =>
          campaign.id === adSetData.campaignId ? { ...campaign, adSets: [...campaign.adSets, newAdSet.id] } : campaign,
        ),
      )

      return newAdSet
    },
    [],
  )

  // Create new ad
  const createAd = useCallback((adData: Omit<Ad, "id" | "createdAt" | "updatedAt" | "performance" | "approval">) => {
    const newAd: Ad = {
      ...adData,
      id: `ad_${Date.now()}`,
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
      approval: {
        status: "pending",
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    setAds((prev) => [...prev, newAd])
    setAdSets((prev) =>
      prev.map((adSet) => (adSet.id === adData.adSetId ? { ...adSet, ads: [...adSet.ads, newAd.id] } : adSet)),
    )

    return newAd
  }, [])

  return {
    account,
    campaigns,
    adSets,
    ads,
    loading: false,
    error: null,
    getCampaign,
    getAdSet,
    getAd,
    getAdSetsForCampaign,
    getAdsForAdSet,
    updateCampaign,
    updateAdSet,
    updateAd,
    createCampaign,
    createAdSet,
    createAd,
  }
}
