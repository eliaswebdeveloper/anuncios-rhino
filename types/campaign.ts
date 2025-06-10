export interface Campaign {
  id: number
  name: string
  active: boolean
  status: string
  strategy: string
  budget: string
}

export interface DateRange {
  start: string
  end: string
  label: string
}
