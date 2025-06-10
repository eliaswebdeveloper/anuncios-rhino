import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface ScheduleSettingsProps {
  adSetId: string
}

export function ScheduleSettings({ adSetId }: ScheduleSettingsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Programación de Anuncios</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Ejecutar anuncios continuamente</Label>
              <p className="text-sm text-gray-600">Los anuncios se ejecutarán hasta que los pauses</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="start-date">Fecha de inicio</Label>
              <Input id="start-date" type="date" />
            </div>
            <div>
              <Label htmlFor="end-date">Fecha de finalización</Label>
              <Input id="end-date" type="date" />
            </div>
          </div>

          <div>
            <Label>Programación por horario</Label>
            <p className="text-sm text-gray-600 mb-2">Ejecutar anuncios solo en horarios específicos</p>
            <div className="grid grid-cols-7 gap-2 text-xs">
              {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
                <div key={day} className="text-center p-2 border rounded">
                  {day}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
