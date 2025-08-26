import {
	Calendar,
	ChevronDown,
	ChevronUp,
	DollarSign,
	Home,
	Inbox,
	LogOut,
	NotebookTabs,
	Plus,
	Projector,
	Search,
	Settings,
	User2,
	UserRound,
} from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const items = [
	{ title: "خانه", url: "/", icon: Home },
	{ title: "پیامها", url: "#", icon: Inbox },
	{ title: "تقویم", url: "#", icon: Calendar },
	{ title: "جستجو", url: "#", icon: Search },
	{ title: "تنظیمات", url: "#", icon: Settings },
];

const AppSidebar = () => {
	return (
		<Sidebar collapsible="icon" side="right">
			<SidebarHeader className="py-3">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<Link href="/" className="w-full flex items-center justify-between gap-4">
								<Image
									src="/logo.svg"
									alt="logo"
									width={30}
									height={30}
									className="text-white stroke-amber-50 fill-amber-100"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
								<span className="font-semibold text-lg">BrainCog</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarSeparator></SidebarSeparator>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>منوی کاربری</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											{item.title}
										</Link>
									</SidebarMenuButton>
									{item.title === "پیامها" && (
										<SidebarMenuBadge className="border border-red-500">
											99+
										</SidebarMenuBadge>
									)}
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>پروژه ها</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="#">
										<Projector />
										<span>تمام پروژه ها</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="#">
										<Plus />
										<span>پروژه جدید</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				{/* Collapsible */}
				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								اطلاعات حساب
								<ChevronDown className="mr-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href="/payments">
												<DollarSign />
												<span>امور مالی</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton asChild>
											<Link href="/users/javad">
												<NotebookTabs />
												<span>جزییات حساب</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>

				{/* Nested */}
				<SidebarGroup>
					<SidebarGroupLabel>جزییات پروژه</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="#">
										<Projector />
										<span>تمام پروژه ها</span>
									</Link>
								</SidebarMenuButton>
								<SidebarMenuSub>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton asChild>
											<Link href="#">
												<Plus />
												ساخت گروه
											</Link>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton asChild>
											<Link href="#">
												<Plus />
												دسته بندی جدید
											</Link>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</SidebarMenuSub>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton className="flex items-center">
									<User2 />
									<span className="mt-1">User_1</span>
									<ChevronUp className="mr-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="start" className="rtlDir ml-4">
								<DropdownMenuItem>
									<UserRound />
									پروفایل
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Settings />
									تنظیمات
								</DropdownMenuItem>
								<DropdownMenuItem variant="destructive">
									<LogOut />
									خروج
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
};

export default AppSidebar;
