"use client"

import { useAdvertisingData } from "../../../lib/ad-sets/hooks"

export default function TestPage() {
  const { campaigns, adSets, ads } = useAdvertisingData()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Test Data Loading</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Campaigns ({campaigns.length})</h2>
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="ml-4 p-2 border rounded">
              <p>
                <strong>ID:</strong> {campaign.id}
              </p>
              <p>
                <strong>Name:</strong> {campaign.name}
              </p>
              <p>
                <strong>Status:</strong> {campaign.status}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold">Ad Sets ({adSets.length})</h2>
          {adSets.map((adSet) => (
            <div key={adSet.id} className="ml-4 p-2 border rounded">
              <p>
                <strong>ID:</strong> {adSet.id}
              </p>
              <p>
                <strong>Name:</strong> {adSet.name}
              </p>
              <p>
                <strong>Campaign ID:</strong> {adSet.campaignId}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold">Ads ({ads.length})</h2>
          {ads.map((ad) => (
            <div key={ad.id} className="ml-4 p-2 border rounded">
              <p>
                <strong>ID:</strong> {ad.id}
              </p>
              <p>
                <strong>Name:</strong> {ad.name}
              </p>
              <p>
                <strong>Ad Set ID:</strong> {ad.adSetId}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Test Links</h2>
        <div className="space-y-2">
          <div>
            <a href="/conjunto-de-anuncios/adset_frio_recognition" className="text-blue-600 hover:underline">
              Go to Ad Set: adset_frio_recognition
            </a>
          </div>
          <div>
            <a href="/conjunto-de-anuncios/adset_frio_recognition/campaign" className="text-blue-600 hover:underline">
              Go to Campaign Settings
            </a>
          </div>
          <div>
            <a
              href="/conjunto-de-anuncios/adset_frio_recognition/ads/ad_primera_impresion"
              className="text-blue-600 hover:underline"
            >
              Go to Ad: ad_primera_impresion
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
