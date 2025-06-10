import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Copy, Trash2 } from "lucide-react"

interface AdsManagementProps {
  adSetId: string
}

export function AdsManagement({ adSetId }: AdsManagementProps) {
  const ads = [
    {
      id: 1,
      name: "Frío / Primera impresión",
      status: "En borrador",
      type: "Imagen única",
    },
    {
      id: 2,
      name: "Frío / Reconocimiento rhino",
      status: "En borrador",
      type: "Imagen única",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Anuncios en este conjunto</h2>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Crear anuncio
        </Button>
      </div>

      <div className="grid gap-4">
        {ads.map((ad) => (
          <Card key={ad.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs">IMG</span>
                  </div>
                  <div>
                    <h3 className="font-medium">{ad.name}</h3>
                    <p className="text-sm text-gray-600">{ad.type}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    {ad.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Copy className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
