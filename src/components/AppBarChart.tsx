"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
	ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
	{ month: "شهریور", income: 214, spent: 140 },
	{ month: "مرداد", income: 209, spent: 130 },
	{ month: "تیر", income: 73, spent: 190 },
	{ month: "خرداد", income: 237, spent: 120 },
	{ month: "اردیبهشت", income: 305, spent: 200 },
	{ month: "فروردین", income: 186, spent: 80 },
];

const chartConfig = {
	income: {
		label: "درآمد",
		color: "var(--chart-1)",
	},
	spent: {
		label: "مخارج",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

const AppBarChart = () => {
	return (
		<div className="flex flex-col justify-between h-full border rounded-xl p-4">
			<h1>درآمد و مخارج</h1>
			<ChartContainer config={chartConfig}>
				<BarChart accessibilityLayer data={chartData}>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey="month"
						tickLine={false}
						tickMargin={10}
						axisLine={false}
						tickFormatter={(value) => value}
					/>
					<YAxis tickLine={false} tickMargin={24} axisLine={false} />
					<ChartTooltip content={<ChartTooltipContent />} />
					<ChartLegend content={<ChartLegendContent />} />
					<Bar dataKey="income" fill="var(--color-income)" radius={4} />
					<Bar dataKey="spent" fill="var(--color-spent)" radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	);
};

export default AppBarChart;
