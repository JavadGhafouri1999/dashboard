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
	{ month: "شهریور", total: 214, successful: 140 },
	{ month: "مرداد", total: 209, successful: 130 },
	{ month: "تیر", total: 73, successful: 190 },
	{ month: "خرداد", total: 237, successful: 120 },
	{ month: "اردیبهشت", total: 305, successful: 200 },
	{ month: "فروردین", total: 186, successful: 80 },
];

const chartConfig = {
	total: {
		label: "کل",
		color: "var(--chart-1)",
	},
	successful: {
		label: "موفق",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

const AppBarChart = () => {
	return (
		<div className="flex flex-col justify-between h-full border rounded-xl p-4">
			<h1>سود کل</h1>
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
					<Bar dataKey="total" fill="var(--color-total)" radius={4} />
					<Bar dataKey="successful" fill="var(--color-successful)" radius={4} />
				</BarChart>
			</ChartContainer>
		</div>
	);
};

export default AppBarChart;
