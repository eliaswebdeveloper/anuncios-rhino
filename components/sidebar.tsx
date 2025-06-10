interface SidebarProps {
  activeSection?: string
}

export function Sidebar({ activeSection = "campaigns" }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r min-h-screen">
      <div className="p-4">
        <div className="flex items-center gap-2 text-blue-600 font-medium">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white text-xs">📁</span>
          </div>
          Campañas
        </div>
      </div>
    </div>
  )
}
