import { ChartAreaGradient } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { ChartRadarMultiple } from "@/components/AppRadarChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function HomePage() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 pt-4 pb-6">
			<div className="bg-primary-foreground p-3 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
				<AppBarChart />
			</div>
			<div className="bg-primary-foreground p-3 rounded-lg">
				<ChartRadarMultiple />
			</div>
			<div className="bg-primary-foreground p-3 rounded-lg">
				<CardList title="محصولات محبوب" />
			</div>
			<div className="bg-primary-foreground p-3 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
				<ChartAreaGradient />
			</div>
			<div className="bg-primary-foreground p-3 rounded-lg">
				<CardList title="آخرین خریدها" />
			</div>
			<div className="bg-primary-foreground p-3 rounded-lg">
				<TodoList />
			</div>
		</div>
	);
}
