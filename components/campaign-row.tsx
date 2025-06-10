"use client"

import { Switch } from "@/components/ui/switch"
import { TableCell, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { StatusBadge } from "./status-badge"
import type { Campaign } from "../types/campaign"

interface CampaignRowProps {
  campaign: Campaign
  isSelected?: boolean
  onToggleActive?: (id: string) => void
  onToggleSelect?: (id: string) => void
  onCampaignClick?: (id: string) => void
}

export function CampaignRow({
  campaign,
  isSelected = false,
  onToggleActive,
  onToggleSelect,
  onCampaignClick,
}: CampaignRowProps) {
  return (
    <TableRow className="hover:bg-gray-50">
      <TableCell>
        <Checkbox checked={isSelected} onCheckedChange={() => onToggleSelect?.(campaign.id)} />
      </TableCell>
      <TableCell>
        <Switch checked={campaign.active} onCheckedChange={() => onToggleActive?.(campaign.id)} />
      </TableCell>
      <TableCell>
        <span className="text-blue-600 hover:underline cursor-pointer" onClick={() => onCampaignClick?.(campaign.id)}>
          {campaign.name}
        </span>
      </TableCell>
      <TableCell>
        <StatusBadge status={campaign.status} />
      </TableCell>
      <TableCell>—</TableCell>
      <TableCell className="text-gray-600">{campaign.strategy}</TableCell>
      <TableCell className="text-gray-600">{campaign.budget}</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
      <TableCell>—</TableCell>
    </TableRow>
  )
}
