"use client"

import { Plus, Copy, Edit, TestTube, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ActionBarProps {
  onCreateClick?: () => void
  onDuplicateClick?: () => void
  onEditClick?: () => void
  onABTestClick?: () => void
}

export function ActionBar({ onCreateClick, onDuplicateClick, onEditClick, onABTestClick }: ActionBarProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={onCreateClick}>
        <Plus className="w-4 h-4 mr-2" />
        Crear
      </Button>

      <Button variant="outline" size="sm" onClick={onDuplicateClick}>
        <Copy className="w-4 h-4 mr-2" />
        Duplicar
        <ChevronDown className="w-4 h-4 ml-2" />
      </Button>

      <Button variant="outline" size="sm" onClick={onEditClick}>
        <Edit className="w-4 h-4 mr-2" />
        Editar
        <ChevronDown className="w-4 h-4 ml-2" />
      </Button>

      <Button variant="outline" size="sm" onClick={onABTestClick}>
        <TestTube className="w-4 h-4 mr-2" />
        Prueba A/B
      </Button>

      <Select defaultValue="mas">
        <SelectTrigger className="w-20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="mas">Más</SelectItem>
        </SelectContent>
      </Select>

      <div className="ml-auto flex items-center gap-2">
        <Select defaultValue="rendimiento">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rendimiento">📊 Columnas: Rendimiento</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="desglose">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desglose">Desglose</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="informes">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="informes">📋 Informes</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="exportar">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="exportar">📤 Exportar</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm">
          📈 Gráficos
        </Button>
      </div>
    </div>
  )
}
