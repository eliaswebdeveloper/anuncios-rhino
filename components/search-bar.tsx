"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
}

export function SearchBar({ placeholder = "Buscar por nombre, ID o métricas", onSearch }: SearchBarProps) {
  return (
    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder={placeholder}
        className="pl-10 bg-gray-50 border-gray-200"
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  )
}
