"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Plus, Info } from "lucide-react"

interface GeneralSettingsProps {
  adSetId: string
}

export function GeneralSettings({ adSetId }: GeneralSettingsProps) {
  const [adSetName, setAdSetName] = useState("Frío / Reconocimiento de Rhino 2")
  const [objective, setObjective] = useState("maximize-impressions")
  const [facebookPage, setFacebookPage] = useState("elias-cardona")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Configuration */}
      <div className="lg:col-span-2 space-y-6">
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
              <Input value={adSetName} onChange={(e) => setAdSetName(e.target.value)} className="flex-1" />
              <Button variant="outline">Crear plantilla</Button>
            </div>
          </CardContent>
        </Card>

        {/* Recognition Objective */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Reconocimiento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="flex items-center gap-2 text-sm font-medium">
                Objetivo de rendimiento
                <Info className="w-4 h-4 text-gray-400" />
              </Label>
              <p className="text-sm text-gray-600 mb-2">Como se mide el éxito de tus anuncios.</p>
              <Select value={objective} onValueChange={setObjective}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maximize-impressions">Maximizar el número de impresiones</SelectItem>
                  <SelectItem value="maximize-reach">Maximizar el alcance</SelectItem>
                  <SelectItem value="maximize-frequency">Maximizar la frecuencia</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-500 mt-2">
                Para ayudarnos a mejorar la entrega, es posible que realicemos una encuesta a una pequeña parte de tu
                público.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Facebook Page */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Página de Facebook
              <Info className="w-4 h-4 text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-3">Elige la página que quieres promocionar.</p>
            <div className="flex gap-2">
              <Select value={facebookPage} onValueChange={setFacebookPage}>
                <SelectTrigger className="flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="elias-cardona">Elías Cardona - Tutor de Software Testing</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Bid Control */}
        <Card>
          <CardHeader>
            <CardTitle>Control de puja • Opcional</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Al hacer clic en "Publicar", aceptas las{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Condiciones y Normas de publicidad de Facebook
              </span>
              .
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Right Sidebar */}
      <div className="space-y-6">
        {/* Campaign Score */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Puntuación de la campaña
              <Info className="w-4 h-4 text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                <span className="text-2xl font-bold text-yellow-800">72</span>
              </div>
              <div className="flex-1">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cost Optimization */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-sm">📈</span>
              </div>
              <div>
                <p className="text-sm font-medium">
                  Puedes obtener un costo por resultado 14.8% más bajo para 1 conjunto de anuncios con el público
                  Advantage+
                </p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    Aplicar
                  </Button>
                  <Button variant="outline" size="sm">
                    Ver en conjunto
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audience Definition */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Definición del público
              <Info className="w-4 h-4 text-gray-400" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              Tu público es algo acotado, lo que puede afectar la entrega de anuncios.
            </p>
            <p className="text-sm text-gray-600">
              Prueba configurar este conjunto de anuncios con un público más amplio para mejorar el rendimiento y llegar
              a más personas con probabilidades de responder.{" "}
              <span className="text-blue-600 hover:underline cursor-pointer">
                Obtén más información sobre el público Advantage+
              </span>
              .
            </p>

            <div className="flex justify-between items-center pt-4 border-t">
              <span className="text-sm">Acotado</span>
              <span className="text-sm">Amplio</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "25%" }}></div>
            </div>

            <div className="pt-2">
              <p className="text-sm text-gray-600">
                <strong>Tamaño de público estimado:</strong> 112,400 - 132,300
                <Info className="w-4 h-4 text-gray-400 inline ml-1" />
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
