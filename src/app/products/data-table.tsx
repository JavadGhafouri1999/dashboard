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
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [filterValue, setFilterValue] = useState("productId");
	const [rowSelection, setRowSelection] = useState({});

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			rowSelection,
		},
	});

	const deleteItems = () => {
		toast.error("موارد انتخاب شده حذف شد");
		setDeleteDialogOpen(false);
	};

	return (
		<div>
			{/* Filters */}
			<div className="flex items-center gap-4">
				<div className="flex items-center gap-2 py-4">
					<Select value={filterValue} onValueChange={setFilterValue}>
						<SelectTrigger className="w-max">
							<SelectValue placeholder="انتخاب فیلتر" />
						</SelectTrigger>
						<SelectContent className="rtlDir">
							<SelectGroup>
								<SelectLabel>انتخاب فیلتر</SelectLabel>
								<SelectItem value="productId">شناسه محصول</SelectItem>
								<SelectItem value="productName">نام محصول</SelectItem>
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
								<SelectItem value="درانبار">درانبار</SelectItem>
								<SelectItem value="اتمام موجودی">اتمام موجودی</SelectItem>
								<SelectItem value="در حال تامین">در حال تامین</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
			{/* Table Wrapper */}
			<div className="overflow-x-auto rounded-md border">
				{/* Delete Action */}
				{Object.keys(rowSelection).length > 0 && (
					<Dialog>
						<DialogTrigger asChild>
							<div className="flex justify-end">
								<Button
									onClick={() => setDeleteDialogOpen(true)}
									variant="destructive"
									size="sm"
									className="flex items-center gap-2 text-xs my-4 ml-4">
									<Trash2 className="size-4" />
									<p>حذف آیتم ها </p>
								</Button>
							</div>
						</DialogTrigger>
						{deleteDialogOpen && (
							<DialogContent>
								<DialogHeader>
									<DialogTitle>آیا از حذف موارد انتخاب شد مطمئن هستید؟</DialogTitle>
									<DialogDescription>
										آیتم های انتخاب شده به صورت کامل حذف خواهد شد و اطلاعات قابل بازگشت
										نیست
									</DialogDescription>
								</DialogHeader>
								<DialogFooter dir="rtl">
									<div className="flex items-center justify-center gap-4 w-full">
										<Button variant="destructive" onClick={() => deleteItems()}>
											حذف
										</Button>
										<Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
											لغو حذف
										</Button>
									</div>
								</DialogFooter>
							</DialogContent>
						)}
					</Dialog>
				)}
				{/* Table */}
				<Table className="text-right">
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead dir="rtl" key={header.id} className="text-right">
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
