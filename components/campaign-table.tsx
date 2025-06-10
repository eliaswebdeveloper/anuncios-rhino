import { Table, TableBody } from "@/components/ui/table"
import { CampaignTableHeader } from "./table-header"
import { CampaignRow } from "./campaign-row"
import type { Campaign } from "../types/campaign"

interface CampaignTableProps {
  campaigns: Campaign[]
  selectedCampaigns?: string[]
  onToggleActive?: (id: string) => void
  onToggleSelect?: (id: string) => void
  onToggleSelectAll?: () => void
  onSort?: (column: string) => void
  onCampaignClick?: (id: string) => void
}

export function CampaignTable({
  campaigns,
  selectedCampaigns = [],
  onToggleActive,
  onToggleSelect,
  onToggleSelectAll,
  onSort,
  onCampaignClick,
}: CampaignTableProps) {
  const allSelected = campaigns.length > 0 && selectedCampaigns.length === campaigns.length

  return (
    <div className="bg-white rounded-lg border">
      <Table>
        <CampaignTableHeader allSelected={allSelected} onToggleSelectAll={onToggleSelectAll} onSort={onSort} />
        <TableBody>
          {campaigns.map((campaign) => (
            <CampaignRow
              key={campaign.id}
              campaign={campaign}
              isSelected={selectedCampaigns.includes(campaign.id)}
              onToggleActive={onToggleActive}
              onToggleSelect={onToggleSelect}
              onCampaignClick={onCampaignClick}
            />
          ))}
        </TableBody>
      </Table>

      <div className="p-4 border-t bg-gray-50 text-sm text-gray-600">Resultados de {campaigns.length} campañas ℹ️</div>
    </div>
  )
}
