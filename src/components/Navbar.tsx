"use client";

import { LogOut, Moon, Settings, Sun, SunMoon, UserRound } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
	const { setTheme } = useTheme();
	return (
		<nav className="sticky top-0 bg-background z-10 p-2 sm:p-4 flex items-center justify-between gap-2 rtlDir">
			{/* Left */}
			<Button size="sm" variant="outline" className="cursor-pointer" asChild>
				<SidebarTrigger />
			</Button>
			{/* Right */}
			<div className="flex items-center gap-2 sm:gap-4">
				{/* Theme Switch */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="outline" size="icon">
							<Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
							<Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="rtlDir ml-4">
						<DropdownMenuItem onClick={() => setTheme("light")}>
							<Sun />
							روشن
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("dark")}>
							<Moon />
							تاریک
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setTheme("system")}>
							<SunMoon />
							سیستم
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				{/* User Menu */}
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar className="cursor-pointer">
							<AvatarImage src="https://github.com/shadcn.png" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="rtlDir ml-4">
						<DropdownMenuLabel>حساب من</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<UserRound />
							<Link href="/users/javad">پروفایل</Link>
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
			</div>
		</nav>
	);
};

export default Navbar;
