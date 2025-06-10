import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PerformanceOverviewProps {
  adSetId: string
}

export function PerformanceOverview({ adSetId }: PerformanceOverviewProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Resumen de Rendimiento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Badge variant="secondary" className="mb-4">
              En borrador
            </Badge>
            <p className="text-gray-600">
              Los datos de rendimiento estarán disponibles una vez que el conjunto de anuncios esté activo.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-400">--</div>
            <div className="text-sm text-gray-600">Impresiones</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-400">--</div>
            <div className="text-sm text-gray-600">Alcance</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-400">--</div>
            <div className="text-sm text-gray-600">Clics</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
