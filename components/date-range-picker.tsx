import { Calendar, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { DateRange } from "../types/campaign"

interface DateRangePickerProps {
  dateRange?: DateRange
  onDateRangeChange?: (range: DateRange) => void
}

export function DateRangePicker({
  dateRange = {
    start: "10 may 2025",
    end: "8 jun 2025",
    label: "Últimos 30 días",
  },
  onDateRangeChange,
}: DateRangePickerProps) {
  return (
    <Button variant="outline" size="sm" className="flex items-center gap-2">
      <Calendar className="w-4 h-4" />
      {dateRange.label}: {dateRange.start} - {dateRange.end}
      <ChevronDown className="w-4 h-4" />
    </Button>
  )
}
