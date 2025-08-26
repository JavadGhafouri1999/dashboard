import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, BadgeCheckIcon, Candy, Citrus, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChartLineMultiple } from "@/components/UserMultipleLineChart";
import Link from "next/link";

const SingleUserPage = () => {
	return (
		<div>
			<Breadcrumb className="ltrDir">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">Dashboard</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/users">Users</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>user_1</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="m-4 flex flex-col xl:flex-row gap-8">
				{/* User Info */}
				<div className="w-full xl:w-1/3 space-y-6">
					{/* User Badges */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<h1 className="text-xl font-semibold">دستاورد های کاربر</h1>
						<div className="flex gap-4 mt-4">
							<HoverCard>
								<HoverCardTrigger>
									<BadgeCheck
										size={36}
										className="bg-cyan-300/25 border border-cyan-300/50 rounded-full p-1"
									/>
								</HoverCardTrigger>
								<HoverCardContent>
									<h2 className="text-lg font-semibold mb-2">احراز شده</h2>
									<p className="text-sm text-muted-foreground text-justify">
										این نشان با بارگذاری مدارک هویتی و تکمیل اطلاعات حساب بدست می آید.
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Citrus
										size={36}
										className="bg-green-300/25 border border-green-300/50 rounded-full p-1"
									/>
								</HoverCardTrigger>
								<HoverCardContent>
									<h2 className="text-lg font-semibold mb-2">محبوب</h2>
									<p className="text-sm text-muted-foreground text-justify">
										بدست آوردن محبوبیت در بین بقیه کاربران
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Candy
										size={36}
										className="bg-indigo-300/25 border border-indigo-300/50 rounded-full p-1"
									/>
								</HoverCardTrigger>
								<HoverCardContent>
									<h2 className="text-lg font-semibold mb-2">افتخار</h2>
									<p className="text-sm text-muted-foreground text-justify">
										به این کاربر به دلیل فعالیت های مفید خود پاداش نقدی تعلق گرفته
									</p>
								</HoverCardContent>
							</HoverCard>
							<HoverCard>
								<HoverCardTrigger>
									<Shield
										size={36}
										className="bg-red-300/25 border border-red-300/50 rounded-full p-1"
									/>
								</HoverCardTrigger>
								<HoverCardContent>
									<h2 className="text-lg font-semibold mb-2">مدیر</h2>
									<p className="text-sm text-muted-foreground text-justify">
										این حساب کاربری به مدیر (Admin) ارتقاع یافته است
									</p>
								</HoverCardContent>
							</HoverCard>
						</div>
					</div>
					{/* Information */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<div className="flex items-center justify-between">
							<h1 className="text-xl font-semibold">اطلاعات کاربر</h1>
							<div className="flex items-center justify-between">
								<Sheet>
									<SheetTrigger asChild>
										<Button variant="outline">بروزرسانی</Button>
									</SheetTrigger>
									<EditUser />
								</Sheet>
							</div>
						</div>
						<div className="space-y-4 mt-4">
							<div className="flex flex-col gap-2 mb-6">
								<p className="text-sm text-muted-foreground">تکمیل حساب</p>
								<Progress value={55} className="rotate-180" />
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground">نام کاربری : </span>
								<span className="text-sm pt-1">user_1</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground">ایمیل کاربری : </span>
								<span className="text-sm pt-1">user_1@example.com</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground">تلفن : </span>
								<span className="text-sm pt-1">09181023695</span>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground">دسترسی : </span>
								<div className="flex flex-wrap gap-2">
									<Badge>کاربر</Badge>
									<Badge
										variant="secondary"
										className="bg-yellow-500 text-white dark:bg-yellow-600">
										کاربر طلایی
									</Badge>
									<Badge
										variant="secondary"
										className="bg-blue-500 text-white dark:bg-blue-600">
										<BadgeCheckIcon />
										مدیر
									</Badge>
									<Badge
										variant="outline"
										className="border border-green-500 dark:border-green-600">
										سازنده
									</Badge>
								</div>
							</div>
							<div className="flex items-center gap-2">
								<span className="text-sm text-muted-foreground">عضویت : </span>
								<span className="text-sm pt-1">1400/03/23</span>
							</div>
						</div>
					</div>
					{/* Card List */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<CardList title="محتوای محبوب" />
					</div>
				</div>
				{/* Chart & User card */}
				<div className="w-full xl:w-2/3 space-y-6">
					{/* User Card */}
					<div className="bg-primary-foreground p-4 rounded-lg space-y-4">
						<div className="flex items-center gap-2">
							<Avatar className="size-12">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CD</AvatarFallback>
							</Avatar>
							<h1 className="text-xl font-semibold">User_1</h1>
						</div>
						<p className="text-sm text-muted-foreground">
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
							گرافیک است
						</p>
					</div>
					{/* Chart Container */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<h1 className="text-xl font-semibold">فعالیت های کاربر</h1>
						<ChartLineMultiple />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleUserPage;
