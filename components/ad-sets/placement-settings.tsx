import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

interface PlacementSettingsProps {
  adSetId: string
}

export function PlacementSettings({ adSetId }: PlacementSettingsProps) {
  const placements = [
    { id: "facebook-feed", label: "Facebook Feed", checked: true },
    { id: "instagram-feed", label: "Instagram Feed", checked: true },
    { id: "facebook-stories", label: "Facebook Stories", checked: false },
    { id: "instagram-stories", label: "Instagram Stories", checked: false },
    { id: "messenger", label: "Messenger", checked: false },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ubicaciones de Anuncios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">Selecciona dónde quieres que aparezcan tus anuncios.</p>
            <div className="space-y-3">
              {placements.map((placement) => (
                <div key={placement.id} className="flex items-center space-x-2">
                  <Checkbox id={placement.id} checked={placement.checked} />
                  <label htmlFor={placement.id} className="text-sm font-medium">
                    {placement.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
