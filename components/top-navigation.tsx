import { Search, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchBar } from "./search-bar"
import { TOP_NAVIGATION_ITEMS } from "../constants/navigation"

interface TopNavigationProps {
  onSearch?: (query: string) => void
}

export function TopNavigation({ onSearch }: TopNavigationProps) {
  return (
    <div className="bg-white border-b">
      <div className="px-6 py-3">
        <div className="flex items-center gap-4">
          {TOP_NAVIGATION_ITEMS.map((item) => (
            <Button
              key={item.id}
              variant={item.variant}
              size="sm"
              className={item.variant === "default" ? "bg-blue-600 hover:bg-blue-700" : "text-gray-600"}
            >
              {item.id === "search" && <Search className="w-4 h-4 mr-2" />}
              {item.label}
            </Button>
          ))}

          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              Crear una vista
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 pb-3">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  )
}
