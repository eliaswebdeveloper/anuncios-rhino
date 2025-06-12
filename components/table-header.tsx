"use client"

import { ChevronDown } from "lucide-react"
import { TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { TABLE_COLUMNS } from "../constants/navigation"

interface TableHeaderProps {
  allSelected?: boolean
  onToggleSelectAll?: () => void
  onSort?: (column: string) => void
}

export function CampaignTableHeader({ allSelected = false, onToggleSelectAll, onSort }: TableHeaderProps) {
  return (
    <TableHeader>
      <TableRow className="bg-gray-50">
        <TableHead className="w-12">
          <Checkbox checked={allSelected} onCheckedChange={onToggleSelectAll} />
        </TableHead>
        {TABLE_COLUMNS.map((column) => (
          <TableHead
            key={column.key}
            className={column.sortable ? "cursor-pointer hover:bg-gray-100" : ""}
            onClick={() => column.sortable && onSort?.(column.key)}
          >
            {column.label}
            {column.sortable && <ChevronDown className="w-4 h-4 inline ml-1" />}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  )
}
