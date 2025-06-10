import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface AudienceSettingsProps {
  adSetId: string
}

export function AudienceSettings({ adSetId }: AudienceSettingsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Audiencia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Audiencia personalizada</h3>
              <p className="text-sm text-gray-600 mb-4">
                Define tu audiencia objetivo basada en demografía, intereses y comportamientos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Demografía</h4>
                  <p className="text-sm text-gray-600">Edad, género, ubicación</p>
                  <Badge variant="outline" className="mt-2">
                    No configurado
                  </Badge>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Intereses</h4>
                  <p className="text-sm text-gray-600">Categorías de interés</p>
                  <Badge variant="outline" className="mt-2">
                    No configurado
                  </Badge>
                </div>
              </div>
            </div>
            <Button>Configurar Audiencia</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
