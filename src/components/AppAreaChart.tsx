"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

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
		label: "تایید",
		color: "var(--chart-1)",
	},
	reject: {
		label: "ردشده",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig;

export function ChartAreaGradient() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>نمودار درخواست</CardTitle>
				<CardDescription>تعداد درخواست های رد یا تایید شده در نیمه سال</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
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
							tickMargin={4}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<defs>
							<linearGradient id="fillaccept" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="var(--color-accept)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="var(--color-accept)" stopOpacity={0.1} />
							</linearGradient>
							<linearGradient id="fillreject" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="var(--color-reject)" stopOpacity={0.8} />
								<stop offset="95%" stopColor="var(--color-reject)" stopOpacity={0.1} />
							</linearGradient>
						</defs>
						<Area
							dataKey="reject"
							type="natural"
							fill="url(#fillreject)"
							fillOpacity={0.4}
							stroke="var(--color-reject)"
							stackId="a"
						/>
						<Area
							dataKey="accept"
							type="natural"
							fill="url(#fillaccept)"
							fillOpacity={0.4}
							stroke="var(--color-accept)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 leading-none font-medium">
							کاهش تعداد درخواست ها حدود %5.2 <TrendingUp className="h-4 w-4" />
						</div>
						<div className="text-muted-foreground flex items-center gap-2 leading-none">
							خرداد - شهریور 1404
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
