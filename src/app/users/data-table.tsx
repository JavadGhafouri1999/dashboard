"use client";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	SortingState,
	getSortedRowModel,
	getPaginationRowModel,
	ColumnFiltersState,
	getFilteredRowModel,
} from "@tanstack/react-table";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { DataTablePagination } from "@/components/TablePagination";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [filterValue, setFilterValue] = useState("email");

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),

		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			columnFilters,
		},
	});

	return (
		<div>
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2 py-4">
					<Select value={filterValue} onValueChange={setFilterValue}>
						<SelectTrigger className="w-max">
							<SelectValue placeholder="انتخاب فیلتر" />
						</SelectTrigger>
						<SelectContent className="rtlDir">
							<SelectGroup>
								<SelectLabel>انتخاب فیلتر</SelectLabel>
								<SelectItem value="email">ایمیل</SelectItem>
								<SelectItem value="productname">نام محصول</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<Input
						placeholder={filterValue}
						value={(table.getColumn(filterValue)?.getFilterValue() as string) ?? ""}
						onChange={(event) => table.getColumn(filterValue)?.setFilterValue(event.target.value)}
						className="w-full sm:max-w-xs text-sm"
					/>
				</div>
				<div className="flex items-center gap-2 py-4">
					<Select
						value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
						onValueChange={(value) => {
							if (value === "all" || value === "") {
								table.getColumn("status")?.setFilterValue("");
							} else {
								table.getColumn("status")?.setFilterValue(value);
							}
						}}>
						<SelectTrigger className="w-max">
							<SelectValue placeholder="انتخاب وضعیت" />
						</SelectTrigger>
						<SelectContent className="rtlDir">
							<SelectGroup>
								<SelectLabel>انتخاب وضعیت</SelectLabel>
								<SelectItem value="all">همه</SelectItem>
								<SelectItem value="تایید شده">تایید شده</SelectItem>
								<SelectItem value="غیرفعال">غیرفعال</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			<div className="overflow-hidden rounded-md border">
				<Table className=" text-right">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id} className="text-right">
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									بدون نتیجه
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<DataTablePagination table={table} />
		</div>
	);
}
