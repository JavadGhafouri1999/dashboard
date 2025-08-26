"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
	{ month: "شهریور", accept: 186, reject: 80 },
	{ month: "مرداد", accept: 305, reject: 200 },
	{ month: "تیر", accept: 237, reject: 120 },
	{ month: "خرداد", accept: 73, reject: 190 },
	{ month: "اردیبهشت", accept: 209, reject: 130 },
	{ month: "فروردین", accept: 214, reject: 140 },
];

const chartConfig = {
	accept: {
		label: "تایید شده",
		color: "var(--chart-1)",
	},
	reject: {
		label: "رد شده",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ChartLineMultiple() {
	return (
		<Card className="mt-4">
			<CardHeader>
				<CardTitle>نمودار درخواست ها</CardTitle>
				<CardDescription>خرداد - شهریور 1404</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<Line
							dataKey="accept"
							type="monotone"
							stroke="var(--color-accept)"
							strokeWidth={2}
							dot={false}
						/>
						<Line
							dataKey="reject"
							type="monotone"
							stroke="var(--color-reject)"
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 leading-none font-medium">
							کاهش میزان مشارکت و درخواست در حدود %5.2 <TrendingUp className="h-4 w-4" />
						</div>
						<div className="text-muted-foreground flex items-center gap-2 leading-none">
							نشان دهنده تعداد درخواست های تایید یا رد شده
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
