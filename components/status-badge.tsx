import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: string
  variant?: "default" | "secondary" | "destructive" | "outline"
}

export function StatusBadge({ status, variant = "secondary" }: StatusBadgeProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "en borrador":
        return "bg-green-100 text-green-800"
      case "activo":
        return "bg-blue-100 text-blue-800"
      case "pausado":
        return "bg-yellow-100 text-yellow-800"
      case "rechazado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Badge variant={variant} className={getStatusColor(status)}>
      🟢 {status}
    </Badge>
  )
}
