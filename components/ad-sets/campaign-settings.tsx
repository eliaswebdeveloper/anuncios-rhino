"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, DollarSign } from "lucide-react"
import type { Campaign } from "../../types/advertising"
import { useAdvertisingData } from "../../lib/ad-sets/hooks"
import { formatCurrency, getObjectiveText, validateCampaignData } from "../../app/utils/advertising-helpers"
import { CampaignDetailsForm } from "@/components/complements/objective-form"

interface CampaignSettingsProps {
  campaign: Campaign
}

export function CampaignSettings({ campaign }: CampaignSettingsProps) {
  const { updateCampaign } = useAdvertisingData()
  const [formData, setFormData] = useState(campaign)
  const [errors, setErrors] = useState<string[]>([])

  const handleSave = () => {
    const validationErrors = validateCampaignData(formData)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    updateCampaign(campaign.id, formData)
    setErrors([])
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Configuration */}
      <div className="lg:col-span-2 space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Configuración de Campaña</h1>
          <p className="text-gray-600">Configura los ajustes generales de tu campaña publicitaria.</p>
        </div>

        {errors.length > 0 && (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <ul className="text-red-600 text-sm space-y-1">
                {errors.map((error, index) => (
                  <li key={index}>• {error}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Campaign Name */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Nombre de la campaña
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Ingresa el nombre de la campaña"
            />
          </CardContent>
        </Card>

        {/* Campaign Objective */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Objetivo
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CampaignDetailsForm />
          </CardContent>
        </Card>

        {/* Budget Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              Presupuesto de campaña
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Tipo de presupuesto</Label>
              <Select
                value={formData.budgetType}
                onValueChange={(value: Campaign["budgetType"]) =>
                  setFormData((prev) => ({ ...prev, budgetType: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Presupuesto diario</SelectItem>
                  <SelectItem value="lifetime">Presupuesto total de campaña</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Cantidad del presupuesto</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm">$</span>
                <Input
                  type="number"
                  value={formData.budgetType === "daily" ? formData.dailyBudget || "" : formData.totalBudget || ""}
                  onChange={(e) => {
                    const value = Number.parseFloat(e.target.value) || 0
                    if (formData.budgetType === "daily") {
                      setFormData((prev) => ({ ...prev, dailyBudget: value }))
                    } else {
                      setFormData((prev) => ({ ...prev, totalBudget: value }))
                    }
                  }}
                  placeholder="0.00"
                />
                <span className="text-sm text-gray-600">
                  {formData.budgetType === "daily" ? "USD por día" : "USD total"}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Resumen de campaña</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Objetivo</p>
              <p className="font-medium">{getObjectiveText(formData.objective)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Presupuesto</p>
              <p className="font-medium">
                {formData.budgetType === "daily"
                  ? formatCurrency(formData.dailyBudget || 0) + " diario"
                  : formatCurrency(formData.totalBudget || 0) + " total"}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Gastado</p>
              <p className="font-medium">{formatCurrency(formData.spentBudget)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Conjuntos de anuncios</p>
              <p className="font-medium">{formData.adSets.length} configurados</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
