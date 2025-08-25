"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "A radar chart with multiple data";

const chartData = [
	{ month: "شهریور", you: 186, team: 80 },
	{ month: "مرداد", you: 305, team: 200 },
	{ month: "تیر", you: 237, team: 120 },
	{ month: "خرداد", you: 73, team: 190 },
	{ month: "اردیبهشت", you: 209, team: 130 },
	{ month: "فروردین", you: 214, team: 140 },
];

const chartConfig = {
	you: {
		label: "شما",
		color: "var(--chart-1)",
	},
	team: {
		label: "تیم",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ChartRadarMultiple() {
	return (
		<Card className="h-full">
			<CardHeader className="items-center pb-4">
				<CardTitle>نمودار مشارکت</CardTitle>
				<CardDescription>میزان مشارکت افراد و خود شما در پروژه</CardDescription>
			</CardHeader>
			<CardContent className="pb-0">
				<ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
					<RadarChart data={chartData}>
						<ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
						<PolarAngleAxis dataKey="month" />
						<PolarGrid />
						<Radar dataKey="you" fill="var(--color-you)" fillOpacity={0.6} />
						<Radar dataKey="team" fill="var(--color-team)" />
					</RadarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm p-0 pt-8">
				<div className="flex items-center gap-2 leading-none font-medium p-0">
					افزایش مشارکت افراد به میزان %10.3 <TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground flex items-center gap-2 leading-none pt-1">
					خرداد - شهریور 1404
				</div>
			</CardFooter>
		</Card>
	);
}
