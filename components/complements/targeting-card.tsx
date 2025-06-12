import { Separator } from "@/components/ui/separator";

function formatearClave(key: string): string {
    return key
        .replace(/_/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/^./, (str) => str.toUpperCase());
}

type TargetingSettingsProps = {
    data: Record<string, unknown>;
};

export function TargetingSettings({ data }: TargetingSettingsProps) {
    return (
        <div className="space-y-6">
            {Object.entries(data).map(([key, value], idx, arr) => (
                <div key={key}>
                    <TargetingSection
                        title={formatearClave(key)}
                        value={typeof value === "string" ? value : JSON.stringify(value)}
                    />
                </div>
            ))}
        </div>
    );
}

function TargetingSection({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-medium">{title}</p>
            </div>
            <p className="text-sm text-muted-foreground">{value}</p>
        </div>
    );
}

type PerformanceSettingsProps = {
    data: Record<string, {
        name: string;
        desc: string;
    }>;
};

export function PerformanceSettings({ data }: PerformanceSettingsProps) {
    return (
        <div className="space-y-6">
            {Object.entries(data).map(([key, value], idx, arr) => (
                <div key={key}>
                    <PerformanceSection
                        title={formatearClave(key)}
                        value={value as { name: string; desc: string; }}
                    />
                </div>
            ))}
        </div>
    );
}

function PerformanceSection({
    title,
    value,
}: {
    title: string;
    value: {
        name: string;
        desc: string;
    };
}) {
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="font-medium">{title}</p>
            </div>
            <p className="text-muted-foreground">{value.name}</p>
            <br />
            <p className="text-xs text-muted-foreground">{value.desc}</p>
        </div>
    );
}