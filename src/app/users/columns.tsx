"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "./page";

export const columns: ColumnDef<User>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				className="mr-4 ml-0"
				checked={
					table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				className="mr-4"
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "profileImage",
		header: "",
		cell: ({ row }) => {
			const profileImage = row.getValue("profileImage") as string;
			const username = row.getValue("username") as string;

			return (
				<Avatar className="size-10">
					<AvatarImage src={profileImage} alt={`${username}'s profile`} className="object-cover" />
					<AvatarFallback>{username?.charAt(0)?.toUpperCase()}</AvatarFallback>
				</Avatar>
			);
		},
	},
	{
		accessorKey: "username",
		header: "نام کاربری",
	},
	{
		accessorKey: "email",
		header: "ایمیل",
	},

	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					وضعیت
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const status = row.getValue("status");

			return (
				<div
					className={cn(
						"p-1 rounded-md w-max text-xs font-semibold",
						status === "تایید شده" && "bg-green-300/25 text-green-800 dark:text-green-100",
						status === "غیرفعال" && "bg-gray-300/25 text-gray-800 dark:text-gray-100"
					)}>
					{status as string}
				</div>
			);
		},
	},
];
