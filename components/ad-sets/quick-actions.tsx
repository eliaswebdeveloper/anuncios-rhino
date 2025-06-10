"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Eye, Play, Pause, Copy, Trash2 } from "lucide-react"
import { getStatusColor, getStatusText } from "../../app/utils/advertising-helpers"

interface QuickActionsProps {
  status: string
  onEdit?: () => void
  onPreview?: () => void
  onToggleStatus?: () => void
  onDuplicate?: () => void
  onDelete?: () => void
}

export function QuickActions({ status, onEdit, onPreview, onToggleStatus, onDuplicate, onDelete }: QuickActionsProps) {
  const isActive = status === "active"

  return (
    <div className="flex items-center gap-2">
      <Badge variant="secondary" className={getStatusColor(status)}>
        🟢 {getStatusText(status)}
      </Badge>

      <Button variant="outline" size="sm" onClick={onEdit}>
        <Edit className="w-4 h-4 mr-2" />
        Editar
      </Button>

      <Button variant="outline" size="sm" onClick={onPreview}>
        <Eye className="w-4 h-4 mr-2" />
        Vista previa
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={onToggleStatus}
        className={isActive ? "text-orange-600 border-orange-600" : "text-green-600 border-green-600"}
      >
        {isActive ? (
          <>
            <Pause className="w-4 h-4 mr-2" />
            Pausar
          </>
        ) : (
          <>
            <Play className="w-4 h-4 mr-2" />
            Activar
          </>
        )}
      </Button>

      <Button variant="outline" size="sm" onClick={onDuplicate}>
        <Copy className="w-4 h-4 mr-2" />
        Duplicar
      </Button>

      <Button variant="outline" size="sm" onClick={onDelete} className="text-red-600 border-red-600">
        <Trash2 className="w-4 h-4 mr-2" />
        Eliminar
      </Button>
    </div>
  )
}
