"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card } from "./ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className="flex items-center justify-between">
				<h1>لیست کارها</h1>
				{/* Calendar */}
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							className="cursor-pointer flex items-center justify-between gap-2">
							<Calendar1Icon className="mb-1" />
							{date ? format(date, "PPP") : <span>انتخاب تاریخ</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="p-0 w-auto ml-4">
						<Calendar
							mode="single"
							defaultMonth={date}
							selected={date}
							onSelect={(date) => {
								setDate(date);
								setOpen(!open);
							}}
							className="rounded-lg shadow-sm"
						/>
					</PopoverContent>
				</Popover>
			</div>
			{/* List */}
			<ScrollArea className="px-1 flex flex-col gap-2 max-h-[520px] mt-4 overflow-y-auto overflow-x-hidden">
				<div className="flex flex-col gap-3">
					<Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-2 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
						<Checkbox
							id="toggle-2"
							defaultChecked
							className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
						/>
						<div className="grid gap-1.5 font-normal text-right">
							<p className="text-sm leading-none font-medium">خرید دوره جدید</p>
							<p className="text-muted-foreground text-sm">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</p>
						</div>
					</Label>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item1" />
							<label
								htmlFor="item1"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item2" />
							<label
								htmlFor="item2"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item3" />
							<label
								htmlFor="item3"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item4" />
							<label
								htmlFor="item4"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item5" />
							<label
								htmlFor="item5"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item6" />
							<label
								htmlFor="item6"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item7" />
							<label
								htmlFor="item7"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item8" />
							<label
								htmlFor="item8"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
					<Card className="p-2">
						<div className="flex items-center gap-4 p-2">
							<Checkbox id="item9" />
							<label
								htmlFor="item9"
								className="text-right text-muted-foreground text-sm font-medium">
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
							</label>
						</div>
					</Card>
				</div>
			</ScrollArea>
		</div>
	);
};

export default TodoList;
