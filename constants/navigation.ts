export const TOP_NAVIGATION_ITEMS = [
  { id: "search", label: "", icon: "search", variant: "ghost" as const },
  { id: "all-ads", label: "📁 Todos los anuncios", variant: "default" as const },
  { id: "actions", label: "👤 Acciones", variant: "ghost" as const },
  { id: "active-ads", label: "📊 Anuncios activos", variant: "ghost" as const },
  { id: "delivery", label: "📦 Con entrega", variant: "ghost" as const },
  { id: "more", label: "➕ Ver más", variant: "ghost" as const },
] as const

export const TABLE_COLUMNS = [
  { key: "active", label: "Activo", sortable: false },
  { key: "campaign", label: "Campaña", sortable: true },
  { key: "delivery", label: "Entrega", sortable: true, hasArrow: true },
  { key: "actions", label: "Acciones", sortable: true },
  { key: "strategy", label: "Estrategia de puja", sortable: true },
  { key: "budget", label: "Presupuesto", sortable: true },
  { key: "attribution", label: "Configuración de atribución", sortable: true },
  { key: "results", label: "Resultados", sortable: true },
  { key: "reach", label: "Alcance", sortable: true },
  { key: "impressions", label: "Imp", sortable: false },
] as const
