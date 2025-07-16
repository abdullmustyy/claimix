import {
    Area,
    AreaChart,
    CartesianGrid,
    Label,
    Line,
    LineChart,
    Pie,
    PieChart,
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
    XAxis,
    YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "~/components/ui/chart";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";

// Pie Chart
const pieChartData = [
    {
        name: "theft-or-burglary",
        value: 30,
        fill: "var(--color-theft-or-burglary)",
    },
    { name: "property-loss", value: 20, fill: "var(--color-property-loss)" },
    { name: "travel-delay", value: 18, fill: "var(--color-travel-delay)" },
    { name: "medical-claims", value: 10, fill: "var(--color-medical-claims)" },
    {
        name: "fraud-investigations",
        value: 10,
        fill: "var(--color-fraud-investigations)",
    },
    { name: "life-insurance", value: 8, fill: "var(--color-life-insurance)" },
    { name: "vehicle-damage", value: 5, fill: "var(--color-vehicle-damage)" },
];

const pieChartConfig = {
    "theft-or-burglary": {
        label: "Theft or Burglary",
        color: "#ffa600",
    },
    "property-loss": {
        label: "Property Loss",
        color: "#ff6361",
    },
    "travel-delay": {
        label: "Travel Delay",
        color: "#bc5090",
    },
    "medical-claims": {
        label: "Medical Claims",
        color: "#58508d",
    },
    "fraud-investigations": {
        label: "Fraud Investigations",
        color: "#003f5c",
    },
    "life-insurance": {
        label: "Life Insurance",
        color: "#4dd091",
    },
    "vehicle-damage": {
        label: "Vehicle Damage",
        color: "#2ca8e2",
    },
} satisfies ChartConfig;

const CLAIM_TYPES = [
    { name: "Theft or Burglary", value: 30, color: "#ffa600" },
    { name: "Property Loss", value: 20, color: "#ff6361" },
    { name: "Travel Delay", value: 18, color: "#bc5090" },
    { name: "Medical Claims", value: 14, color: "#58508d" },
    { name: "Fraud Investigations", value: 10, color: "#003f5c" },
    { name: "Life Insurance", value: 8, color: "#4dd091" },
    { name: "Vehicle Damage", value: 5, color: "#2ca8e2" },
];

// Radar Chart
const radarChartData = [
    { category: "Fire Claims", manual: 8, ai: 10 },
    { category: "Flood", manual: 12, ai: 8 },
    { category: "Theft", manual: 4, ai: 6 },
    { category: "Medical", manual: 2, ai: 4 },
    { category: "Travel", manual: 6, ai: 12 },
];

const radarChartConfig = {
    ai: {
        label: "AI approved",
        color: "#3C82F3",
    },
    manual: {
        label: "Manual",
        color: "#10B982",
    },
} satisfies ChartConfig;

// Line Chart
const lineChartData = [
    { name: "Jan", ai: 3, manual: 6 },
    { name: "Feb", ai: 4, manual: 6 },
    { name: "Mar", ai: 2, manual: 6 },
    { name: "Apr", ai: 4, manual: 2 },
    { name: "May", ai: 5, manual: 4 },
    { name: "Jun", ai: 8, manual: 2 },
    { name: "Jul", ai: 8, manual: 2 },
    { name: "Aug", ai: 8, manual: 2 },
    { name: "Sep", ai: 6, manual: 4 },
    { name: "Oct", ai: 4, manual: 4 },
    { name: "Nov", ai: 6, manual: 2 },
    { name: "Dec", ai: 4, manual: 2 },
];

const lineChartConfig = {
    ai: {
        label: "AI",
        color: "#5C0FFF",
    },
    manual: {
        label: "Manual",
        color: "#FFCAA3",
    },
} satisfies ChartConfig;

// Auto-approved vs Escalated
const autoEscalatedData = [
    { name: "Jan", auto: 30, escalated: 20 },
    { name: "Feb", auto: 40, escalated: 28 },
    { name: "Mar", auto: 48, escalated: 37 },
    { name: "Apr", auto: 55, escalated: 42 },
    { name: "May", auto: 63, escalated: 50 },
    { name: "Jun", auto: 70, escalated: 55 },
    { name: "Jul", auto: 78, escalated: 61 },
    { name: "Aug", auto: 88, escalated: 70 },
    { name: "Sep", auto: 97, escalated: 79 },
    { name: "Oct", auto: 110, escalated: 90 },
    { name: "Nov", auto: 120, escalated: 100 },
    { name: "Dec", auto: 130, escalated: 110 },
];

const autoEscalatedConfig = {
    auto: {
        label: "Auto-approved",
        color: "#58C1C3",
    },
    escalated: {
        label: "Escalated",
        color: "#3C82F3",
    },
} satisfies ChartConfig;

export default function AnalyticsPage() {
    return (
        <section className="bg-white md:m-3 p-4 rounded-xl flex flex-col gap-5">
            <div className="px-4 mb-2.5">
                <h2 className="text-raven text-2xl font-medium">Analytics</h2>
                <p className="text-sm text-slate-gray">
                    Overview of key performance metrics
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
                {/* Claims Processed */}
                <Card className="justify-between py-4 md:col-span-2 rounded-md">
                    <CardHeader className="md:px-5 px-4">
                        <CardTitle className="font-medium">
                            Claims processed
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="md:px-5 px-4">
                        <div className="text-4xl font-geist-mono font-medium">
                            450
                        </div>
                        <div className="text-slate-blue">From last 7days</div>
                    </CardContent>
                </Card>
                {/* Top Claim Types */}
                <Card className="py-4 md:col-span-4 gap-4 rounded-md">
                    <CardHeader className="flex-row items-start justify-between flex md:px-6 px-4">
                        <CardTitle className="font-medium">
                            Top claim types
                        </CardTitle>
                        <Select defaultValue="monthly">
                            <SelectTrigger
                                size="sm"
                                className="text-[0.8125rem] focus-visible:ring-0"
                            >
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent align="end">
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent className="flex flex-col md:flex-row md:gap-4 items-center h-full md:px-0 px-6 md:pr-6">
                        <ChartContainer
                            config={pieChartConfig}
                            className="md:w-1/2 w-full md:min-h-full aspect-square"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />
                                <Pie
                                    data={pieChartData}
                                    dataKey="value"
                                    nameKey="name"
                                    innerRadius="74%"
                                    paddingAngle={4}
                                    cornerRadius={10}
                                >
                                    <Label
                                        content={({ viewBox }) => {
                                            if (
                                                viewBox &&
                                                "cx" in viewBox &&
                                                "cy" in viewBox
                                            ) {
                                                return (
                                                    <text
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={viewBox.cy}
                                                            className="fill-[#101828] text-4xl font-semibold"
                                                        >
                                                            {
                                                                pieChartData.length
                                                            }
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={
                                                                (viewBox.cy ||
                                                                    0) + 24
                                                            }
                                                            className="fill-iron-gray font-medium text-xs"
                                                        >
                                                            Claim Types
                                                        </tspan>
                                                    </text>
                                                );
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>
                        <div className="md:w-1/2 w-full flex flex-col gap-2.5 text-[0.8125rem]">
                            {CLAIM_TYPES.map((ct, i) => (
                                <div
                                    key={ct.name + i}
                                    className="flex items-center justify-between text-iron-gray"
                                >
                                    <div className="flex items-center gap-2">
                                        <div
                                            style={{ background: ct.color }}
                                            className="size-2 rounded-xs"
                                        />
                                        <span>{ct.name}</span>
                                    </div>
                                    <span className="ml-auto">{ct.value}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                {/* Total Payouts */}
                <Card className="md:col-span-3 rounded-md py-4 gap-0 -space-y-10">
                    <CardHeader className="items-start justify-between flex md:px-6 px-4 z-10">
                        <div className="flex flex-col gap-2">
                            <CardTitle className="font-normal">
                                Total Payouts
                            </CardTitle>
                            <span className="font-geist-mono font-medium text-2xl">
                                ₦6.8M
                            </span>
                        </div>
                        <Select defaultValue="monthly">
                            <SelectTrigger
                                size="sm"
                                className="text-[0.8125rem] focus-visible:ring-0"
                            >
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent align="end">
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardHeader>
                    <CardContent className="h-full">
                        <ChartContainer
                            config={radarChartConfig}
                            className="size-full md:aspect-auto aspect-square"
                        >
                            <RadarChart data={radarChartData}>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent />}
                                />
                                <PolarAngleAxis
                                    dataKey="category"
                                    tick={false}
                                />
                                <PolarGrid stroke="#E5E5E5" />
                                <Radar
                                    dataKey="ai"
                                    fill="var(--color-ai)"
                                    fillOpacity={0.3}
                                    stroke="var(--color-ai)"
                                    strokeWidth={2}
                                />
                                <Radar
                                    dataKey="manual"
                                    fill="var(--color-manual)"
                                    fillOpacity={0.3}
                                    stroke="var(--color-manual)"
                                    strokeWidth={2}
                                />
                                <ChartLegend
                                    content={<ChartLegendContent />}
                                    className="pt-0"
                                />
                            </RadarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Claims Volume over Time */}
            <Card className="rounded-md gap-4 py-4">
                <CardHeader className="items-end justify-between flex md:px-6 px-4">
                    <CardTitle className="font-normal flex flex-col gap-2">
                        <span>Claims volume over time</span>
                        <span className="text-2xl">
                            <span className="font-medium">4 </span>min{" "}
                            <span className="font-medium">55 </span>sec
                        </span>
                    </CardTitle>
                    <Select defaultValue="monthly">
                        <SelectTrigger
                            size="sm"
                            className="text-[0.8125rem] focus-visible:ring-0"
                        >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent className="h-full md:px-6 px-4">
                    <ChartContainer
                        config={lineChartConfig}
                        className="size-full md:aspect-[2/1] aspect-square"
                    >
                        <LineChart accessibilityLayer data={lineChartData}>
                            <CartesianGrid stroke="#0000000F" />
                            <XAxis
                                dataKey="name"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />
                            <YAxis
                                axisLine={false}
                                stroke="#0000000F"
                                tickCount={7}
                                tickMargin={8}
                                tickSize={10}
                                width={26}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />
                            <Line
                                dataKey="ai"
                                type="stepAfter"
                                stroke="var(--color-ai)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                dataKey="manual"
                                type="stepAfter"
                                stroke="var(--color-manual)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <ChartLegend
                                verticalAlign="top"
                                content={<ChartLegendContent />}
                                className="justify-start pb-6"
                            />
                        </LineChart>
                    </ChartContainer>
                </CardContent>
            </Card>

            {/* Auto-approved vs Escalated */}
            <Card className="rounded-md gap-4 py-4">
                <CardHeader className="items-end justify-between flex md:px-6 px-4">
                    <CardTitle className="font-normal flex flex-col gap-2">
                        <span>% auto-approved vs escalated</span>
                        <span className="font-geist-mono text-2xl">68%</span>
                    </CardTitle>
                    <Select defaultValue="monthly">
                        <SelectTrigger
                            size="sm"
                            className="text-[0.8125rem] focus-visible:ring-0"
                        >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent className="h-full md:px-6 px-4">
                    <ChartContainer
                        config={autoEscalatedConfig}
                        className="size-full md:aspect-[2.5/1] aspect-square"
                    >
                        <AreaChart accessibilityLayer data={autoEscalatedData}>
                            <defs>
                                <linearGradient
                                    id="auto-gradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#5CC8BE"
                                        stopOpacity={0.2}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#5CC8BE"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="escalated-gradient"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#357AF6"
                                        stopOpacity={0.2}
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="#357AF6"
                                        stopOpacity={0}
                                    />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke="#F2F2F7" />
                            <XAxis
                                dataKey="name"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tickCount={7}
                                tickMargin={8}
                                width={36}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={
                                    <ChartTooltipContent indicator="line" />
                                }
                            />
                            <Area
                                dataKey="auto"
                                type="natural"
                                fill="url(#auto-gradient)"
                                stroke="var(--color-auto)"
                                strokeWidth={2}
                                stackId="a"
                            />
                            <Area
                                dataKey="escalated"
                                type="natural"
                                fill="url(#escalated-gradient)"
                                stroke="var(--color-escalated)"
                                strokeWidth={2}
                                stackId="a"
                            />
                            <ChartLegend
                                verticalAlign="top"
                                content={<ChartLegendContent />}
                                className="justify-start pb-6"
                            />
                        </AreaChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </section>
    );
}
