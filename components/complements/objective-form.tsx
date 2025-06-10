"use client"

import { useState } from "react"
import {
    CircleHelp,
    Filter,
    Megaphone,
    MessageSquare,
    MousePointer,
    ShoppingBag,
    Users,
} from "lucide-react"

export function CampaignDetailsForm() {
    const [selectedObjective, setSelectedObjective] = useState("awareness")

    return (
        <div className="space-y-4 p-6">
            <SectionHeader
                title="Objetivo de la campaña"
                helpText="Seleccione el objetivo principal de su campaña publicitaria"
            />
            <div className="space-y-2">
                <ObjectiveOption
                    id="awareness"
                    icon={<Megaphone />}
                    label="Reconocimiento"
                    selected={selectedObjective === "awareness"}
                    onClick={() => setSelectedObjective("awareness")}
                />

                <ObjectiveOption
                    id="traffic"
                    icon={<MousePointer className="w-5 h-5" />}
                    label="Tráfico"
                    selected={selectedObjective === "traffic"}
                    onClick={() => setSelectedObjective("traffic")}
                />

                <ObjectiveOption
                    id="interaction"
                    icon={<MessageSquare className="w-5 h-5" />}
                    label="Interacción"
                    selected={selectedObjective === "interaction"}
                    onClick={() => setSelectedObjective("interaction")}
                />

                <ObjectiveOption
                    id="leads"
                    icon={<Filter className="w-5 h-5" />}
                    label="Clientes potenciales"
                    selected={selectedObjective === "leads"}
                    onClick={() => setSelectedObjective("leads")}
                />

                <ObjectiveOption
                    id="app"
                    icon={<Users className="w-5 h-5" />}
                    label="Promoción de la app"
                    selected={selectedObjective === "app"}
                    onClick={() => setSelectedObjective("app")}
                />

                <ObjectiveOption
                    id="sales"
                    icon={<ShoppingBag className="w-5 h-5" />}
                    label="Ventas"
                    selected={selectedObjective === "sales"}
                    onClick={() => setSelectedObjective("sales")}
                />
            </div>

        </div>
    )
}

function SectionHeader({ title, helpText }: { title: string; helpText?: string }) {
    return (
        <div className="flex items-center gap-1">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            {helpText && (
                <div className="relative group">
                    <CircleHelp className="w-4 h-4 text-gray-400" />
                    <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block w-64 p-2 bg-gray-800 text-white text-xs rounded shadow-lg z-10">
                        {helpText}
                    </div>
                </div>
            )}
        </div>
    )
}

function ObjectiveOption({ id, icon, label, selected, onClick }: {
    id: string
    icon: React.ReactNode
    label: string
    selected: boolean
    onClick: () => void
}) {
    return (
        <div
            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer ${selected ? "bg-blue-50" : "hover:bg-gray-50"
                }`}
            onClick={onClick}
        >
            <div className="flex items-center justify-center">
                <input
                    type="radio"
                    id={id}
                    name="campaign-objective"
                    className="sr-only"
                    checked={selected}
                    onChange={() => { }}
                />
                <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center ${selected ? "border-blue-600 bg-white" : "border-gray-300 bg-white"
                        }`}
                >
                    {selected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                </div>
            </div>

            <div
                className={`w-10 h-10 rounded-md flex items-center justify-center ${selected ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                    }`}
            >
                {icon}
            </div>

            <span className={`text-sm font-medium ${selected ? "text-gray-900" : "text-gray-700"}`}>{label}</span>
        </div>
    )
}