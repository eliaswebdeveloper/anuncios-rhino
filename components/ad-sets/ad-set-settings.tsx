"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import type { AdSet } from "../../types/advertising"
import { useAdvertisingData } from "../../lib/ad-sets/hooks"
import { validateAdSetData } from "../../app/utils/advertising-helpers"
import { TargetingSettings } from "../complements/targeting-card"

interface AdSetSettingsProps {
  adSet: AdSet
}

export function AdSetSettings({ adSet }: AdSetSettingsProps) {
  const { updateAdSet, account } = useAdvertisingData()
  const [formData, setFormData] = useState(adSet)
  const [errors, setErrors] = useState<string[]>([])

  const handleSave = () => {
    const validationErrors = validateAdSetData(formData)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    updateAdSet(adSet.id, formData)
    setErrors([])
  }

  const targets = {
    ubicacion: "Aguascalientes: colocar la flecha del mapa en Colosio, AGS. Radio: el mínimo (7 km)",
    rangoDeEdad: "18 - 40",
    sexo: "Hombres",
    intereses: "Intereses: Ejercicio físico (fitness)",
    idiomas: "Todos los idiomas",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Configuration */}
      <div className="lg:col-span-2 space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Configuración del Conjunto de Anuncios</h1>
          <p className="text-gray-600">Configura los ajustes específicos para este conjunto de anuncios.</p>
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

        {/* Ad Set Name */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Nombre del conjunto de anuncios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="flex-1"
              />
              <Button variant="outline">Guardar nombre</Button>
            </div>
          </CardContent>
        </Card>

        {/* Targeting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Audiencia
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <TargetingSettings data={targets} />
          </CardContent>
        </Card>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        <div className="w-full invisible"></div>
      </div>
    </div>
  )
}
