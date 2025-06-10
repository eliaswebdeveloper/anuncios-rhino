"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Upload, Eye, Info } from "lucide-react"
import type { Ad } from "../../types/advertising"
import { useAdvertisingData } from "../../lib/hooks/use-advertising-data"
import { validateAdData, getStatusColor, getStatusText } from "../../app/utils/advertising-helpers"

interface IndividualAdSettingsProps {
  ad: Ad
}

export function IndividualAdSettings({ ad }: IndividualAdSettingsProps) {
  const { updateAd } = useAdvertisingData()
  const [formData, setFormData] = useState(ad)
  const [errors, setErrors] = useState<string[]>([])

  const handleSave = () => {
    const validationErrors = validateAdData(formData)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    updateAd(ad.id, formData)
    setErrors([])
  }

  const updateCreative = (updates: Partial<typeof formData.creative>) => {
    setFormData((prev) => ({
      ...prev,
      creative: { ...prev.creative, ...updates },
    }))
  }

  const updateCopy = (updates: Partial<typeof formData.creative.copy>) => {
    setFormData((prev) => ({
      ...prev,
      creative: {
        ...prev.creative,
        copy: { ...prev.creative.copy, ...updates },
      },
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Configuration */}
      <div className="lg:col-span-2 space-y-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Configuración del Anuncio</h1>
          <p className="text-gray-600">Configura el contenido y formato de tu anuncio individual.</p>
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

        {/* Ad Identity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Identidad del anuncio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="ad-name">Nombre del anuncio</Label>
                <Input
                  id="ad-name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="Ingresa el nombre del anuncio"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ad Creative */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Creatividad del anuncio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Formato del anuncio</Label>
              <Select
                value={formData.creative.type}
                onValueChange={(value: typeof formData.creative.type) => updateCreative({ type: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="image">Imagen única</SelectItem>
                  <SelectItem value="carousel">Carrusel</SelectItem>
                  <SelectItem value="video">Video</SelectItem>
                  <SelectItem value="collection">Colección</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Medios</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Arrastra y suelta imágenes aquí o</p>
                <Button variant="outline" className="mt-2">
                  Examinar
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="ad-text">Texto principal</Label>
              <Textarea
                id="ad-text"
                value={formData.creative.copy.primaryText}
                onChange={(e) => updateCopy({ primaryText: e.target.value })}
                placeholder="Escribe el texto principal de tu anuncio..."
                rows={4}
              />
              <p className="text-xs text-gray-500 mt-1">Máximo 125 caracteres recomendado</p>
            </div>

            <div>
              <Label htmlFor="headline">Titular</Label>
              <Input
                id="headline"
                value={formData.creative.copy.headline}
                onChange={(e) => updateCopy({ headline: e.target.value })}
                placeholder="Escribe un titular atractivo..."
              />
              <p className="text-xs text-gray-500 mt-1">Máximo 27 caracteres</p>
            </div>

            <div>
              <Label>Llamada a la acción</Label>
              <Select
                value={formData.creative.callToAction.type}
                onValueChange={(value: typeof formData.creative.callToAction.type) =>
                  setFormData((prev) => ({
                    ...prev,
                    creative: {
                      ...prev.creative,
                      callToAction: { ...prev.creative.callToAction, type: value },
                    },
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="learn_more">Más información</SelectItem>
                  <SelectItem value="sign_up">Registrarse</SelectItem>
                  <SelectItem value="download">Descargar</SelectItem>
                  <SelectItem value="contact_us">Contáctanos</SelectItem>
                  <SelectItem value="shop_now">Comprar ahora</SelectItem>
                  <SelectItem value="book_now">Reservar ahora</SelectItem>
                  <SelectItem value="get_quote">Obtener cotización</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

      </div>

      {/* Right Sidebar - Preview */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Vista previa del anuncio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg p-4 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">EC</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{formData.creative.branding.pageName}</p>
                    <p className="text-xs text-gray-500">Patrocinado</p>
                  </div>
                </div>

                <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Imagen del anuncio</span>
                </div>

                <div>
                  <h3 className="font-medium text-sm mb-1">{formData.creative.copy.headline}</h3>
                  <p className="text-sm">
                    {formData.creative.copy.primaryText || "Tu texto principal aparecerá aquí..."}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{formData.creative.copy.displayLink}</p>
                  <Button size="sm" className="mt-2 w-full">
                    {formData.creative.callToAction.type === "learn_more"
                      ? "Más información"
                      : formData.creative.callToAction.type === "sign_up"
                        ? "Registrarse"
                        : formData.creative.callToAction.type === "download"
                          ? "Descargar"
                          : formData.creative.callToAction.type === "contact_us"
                            ? "Contáctanos"
                            : formData.creative.callToAction.type === "shop_now"
                              ? "Comprar ahora"
                              : formData.creative.callToAction.type === "book_now"
                                ? "Reservar ahora"
                                : "Obtener cotización"}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
