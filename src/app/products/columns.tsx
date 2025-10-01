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
import { Products } from "./page";

export const columns: ColumnDef<Products>[] = [
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
		accessorKey: "productId",
		header: "شناسه محصول",
	},
	{
		accessorKey: "productName",
		header: "نام محصول",
	},
	{
		accessorKey: "quantity",
		header: "تعداد",
	},
	{
		accessorKey: "price",
		header: ({ column }) => {
			return (
				<Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					قیمت
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("price"));
			const numberPart = new Intl.NumberFormat("fa-IR").format(amount);
			const formatted = numberPart + " تومان";

			return <div className="text-right font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "colors",
		cell: ({ row }) => {
			const colors = row.getValue("colors") as string[];

			return (
				<div className="flex items-center gap-1">
					{colors.map((color) => (
						<div
							key={color}
							className="size-3 p-2 rounded-full border border-gray-400"
							style={{ backgroundColor: color }}
						/>
					))}
				</div>
			);
		},
	},
	{
		accessorKey: "sizes",

		cell: ({ row }) => {
			const sizes = row.getValue("sizes") as string[];

			return <div className="text-right font-medium">{sizes.join("-")}</div>;
		},
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
						status === "درانبار" && "bg-green-300/25 text-green-800 dark:text-green-100",
						status === "اتمام موجودی" && "bg-red-300/25 text-red-800 dark:text-red-100",
						status === "در حال تامین" && "bg-blue-300/25 text-blue-800 dark:text-blue-100"
					)}>
					{status as string}
				</div>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const product = row.original;
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

						<DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.productId)}>
							کپی شناسه محصول
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuLabel className="text-xs">محصول</DropdownMenuLabel>

						<DropdownMenuItem>
							<Link href={`/products/${product.productId}`}>مشاهده محصول</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
