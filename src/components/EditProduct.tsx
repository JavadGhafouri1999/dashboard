"use client";

import { z } from "zod";
import { sizeSchema, colorSchema } from "@/utils/schemas";
import { SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { productFormSchema } from "@/utils/schemas";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EditProduct = () => {
	const form = useForm<z.infer<typeof productFormSchema>>({
		resolver: zodResolver(productFormSchema),
		defaultValues: {
			productName: "محصول 10",
			price: 1000000,
			quantity: 100,
			status: "در حال تامین",
			sizes: ["M"],
			colors: ["black"],
		},
	});

	// TODO:  handle edit product
	function onSubmit(values: z.infer<typeof productFormSchema>) {
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<div>
			<SheetContent side="left" className="min-h-screen overflow-y-auto">
				<SheetHeader>
					<SheetTitle>بروزرسانی اطلاعات کاربری</SheetTitle>
					<SheetDescription className="my-3">
						اطلاعات کاربری خود را در فرم زیر بروزرسانی کنید.
					</SheetDescription>
				</SheetHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-4 my-4">
						<FormField
							control={form.control}
							name="productName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>نام محصول</FormLabel>
									<FormControl>
										<Input placeholder="ژاکت پشمی کلاه دار" {...field} />
									</FormControl>
									<FormDescription className="text-xs">
										نام محصول باید شفاف باشد بدون توضیحات اضافی
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="price"
							render={({ field }) => (
								<FormItem>
									<FormLabel>قیمت محصول</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="100،000"
											{...field}
											className="ltrDir"
											min={0}
											max={10000000}
										/>
									</FormControl>
									<FormDescription className="text-xs">
										قیمیت محصول به تومان است
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="quantity"
							render={({ field }) => (
								<FormItem>
									<FormLabel>تعداد محصول</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="1000"
											{...field}
											className="ltrDir"
											min={0}
											max={1000}
										/>
									</FormControl>
									<FormDescription className="text-xs">
										تعداد محصول نمیتواند بیشتر از 1000 باشد
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="status"
							render={({ field }) => (
								<FormItem>
									<FormLabel>وضعیت محصول</FormLabel>
									<FormControl>
										<Select {...field} dir="rtl">
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Theme" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="درانبار">درانبار</SelectItem>
												<SelectItem value="در حال تامین">در حال تامین</SelectItem>
												<SelectItem value="اتمام موجودی">اتمام موجودی</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormDescription className="text-xs">
										وضعیت تامین بودن کالا
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex w-full items-center gap-2">
							<FormField
								control={form.control}
								name="sizes"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>سایزها</FormLabel>
										<DropdownMenu dir="rtl">
											<DropdownMenuTrigger asChild>
												<Button variant="outline" className="w-full">
													{field.value?.length > 0
														? `${field.value.length} سایز انتخاب شده`
														: "انتخاب سایزها"}
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												{sizeSchema.options.map((size) => (
													<DropdownMenuCheckboxItem
														key={size}
														checked={field.value?.includes(size)}
														onSelect={(e) => e.preventDefault()}
														onCheckedChange={(checked) => {
															const updatedSizes = checked
																? [...(field.value || []), size]
																: field.value?.filter((s) => s !== size) ||
																  [];
															field.onChange(updatedSizes);
														}}>
														{size}
													</DropdownMenuCheckboxItem>
												))}
											</DropdownMenuContent>
										</DropdownMenu>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="colors"
								render={({ field }) => (
									<FormItem className="w-full">
										<FormLabel>رنگها</FormLabel>
										<DropdownMenu dir="rtl">
											<DropdownMenuTrigger asChild>
												<Button variant="outline" className="w-full">
													{field.value?.length > 0
														? `${field.value.length} رنگ انتخاب شده`
														: "انتخاب رنگها"}
												</Button>
											</DropdownMenuTrigger>
											<DropdownMenuContent>
												{colorSchema.options.map((color) => (
													<DropdownMenuCheckboxItem
														key={color}
														checked={field.value?.includes(color)}
														onSelect={(e) => e.preventDefault()}
														onCheckedChange={(checked) => {
															const updatedColors = checked
																? [...(field.value || []), color]
																: field.value?.filter((c) => c !== color) ||
																  [];
															field.onChange(updatedColors);
														}}>
														<div className="flex items-center gap-2">
															<span
																className="size-3 rounded-full p-2 border border-gray-400"
																style={{ backgroundColor: color }}
															/>
															{color}
														</div>
													</DropdownMenuCheckboxItem>
												))}
											</DropdownMenuContent>
										</DropdownMenu>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<Button type="submit" className="w-full my-3 cursor-pointer">
							اعمال تغییرات
						</Button>
					</form>
				</Form>
			</SheetContent>
		</div>
	);
};

export default EditProduct;
