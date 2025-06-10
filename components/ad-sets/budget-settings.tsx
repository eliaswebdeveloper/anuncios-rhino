import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BudgetSettingsProps {
  adSetId: string
}

export function BudgetSettings({ adSetId }: BudgetSettingsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Presupuesto y Programación</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="budget-type">Tipo de presupuesto</Label>
            <Select defaultValue="daily">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Presupuesto diario</SelectItem>
                <SelectItem value="lifetime">Presupuesto total</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="budget-amount">Cantidad del presupuesto</Label>
            <div className="flex items-center gap-2">
              <span className="text-sm">$</span>
              <Input id="budget-amount" type="number" placeholder="0.00" />
              <span className="text-sm text-gray-600">USD por día</span>
            </div>
          </div>

          <div>
            <Label htmlFor="bid-strategy">Estrategia de puja</Label>
            <Select defaultValue="lowest-cost">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lowest-cost">Costo más bajo</SelectItem>
                <SelectItem value="bid-cap">Límite de puja</SelectItem>
                <SelectItem value="target-cost">Costo objetivo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
