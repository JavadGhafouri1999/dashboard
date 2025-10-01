"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Payment } from "./page";

export const columns: ColumnDef<Payment>[] = [
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
		accessorKey: "username",
		header: "نام کاربری",
	},
	{
		accessorKey: "email",
		header: "ایمیل",
	},

	{
		accessorKey: "amount",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					مبلغ
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("amount"));
			const numberPart = new Intl.NumberFormat("fa-IR").format(amount);
			const formatted = numberPart + " تومان";

			return <div className="text-right font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					وضعیت
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const status = row.getValue("status");

			return (
				<div
					className={cn(
						"p-1 rounded-md w-max text-xs font-semibold",
						status === "موفقیت آمیز" && "bg-green-300/25 text-green-800 dark:text-green-100",
						status === "لغو شده" && "bg-red-300/25 text-red-800 dark:text-red-100",
						status === "در حال برسی" && "bg-orange-300/25 text-orange-800 dark:text-orange-100",
						status === "در حال انجام" && "bg-blue-300/25 text-blue-800 dark:text-blue-100"
					)}>
					{status as string}
				</div>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu dir="rtl">
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="size-6 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="size-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel className="text-xs">عملکردها</DropdownMenuLabel>

						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
							کپی شناسه پرداخت
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuLabel className="text-xs">کاربر</DropdownMenuLabel>

						<DropdownMenuItem>
							<Link href={`/users/${payment.userId}`}>مشاهده کاربر</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>جزئیات سفارش</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
