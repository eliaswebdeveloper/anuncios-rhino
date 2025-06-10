import { Separator } from "@/components/ui/separator";

function formatearClave(key: string): string {
    return key
        .replace(/_/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/^./, (str) => str.toUpperCase());
}

type SegmentCardProps = {
    data: Record<string, unknown>;
    onEdit?: (section: string) => void;
};

export function TargetingSettings({ data, onEdit }: SegmentCardProps) {
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
