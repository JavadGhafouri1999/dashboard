"use client";
import { z } from "zod";
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

const formSchema = z.object({
	username: z
		.string()
		.min(3, { message: "نام کاربری حداقل 3 حرف است" })
		.max(16, { message: "نام کاربری نباید بیشتر از 16 حرف باشد" }),
	email: z.email({ message: "ایمیل معتبر نیست" }),
	password: z
		.string()
		.min(6, { message: " رمز عبور حداقل 6 حرف است" })
		.max(48, { message: "رمز عبور نباید بیشتر از 48 حرف باشد" }),
	phone: z.string().min(10).max(16),
	location: z
		.string()
		.min(2, { message: " موقعیت مکانی حداقل 6 حرف است" })
		.max(16, { message: " موقعیت مکانی نباید بیشتر از 16 حرف باشد" }),
});

const EditUser = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "user_1",
			email: "user_1@example.com",
			password: "@#1236956Ll",
			location: "Tehran",
			phone: "+98 9378 7274",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (
		<div>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>بروزرسانی اطلاعات کاربری</SheetTitle>
					<SheetDescription className="my-3">
						لطفاً اطلاعات کاربری خود را در فرم زیر بروزرسانی کنید.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-4 my-4">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>نام کاربری</FormLabel>
									<FormControl>
										<Input placeholder="username" {...field} className="ltrDir" />
									</FormControl>
									<FormDescription className="text-xs">
										نام کاربری شما به شکل عمومی قابل مشاهده است
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>آدرس ایمیل</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="email"
											{...field}
											className="ltrDir"
										/>
									</FormControl>
									<FormDescription className="text-xs">
										ایمیل شما قابل مشاهده نخواهد بود
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>رمزعبور</FormLabel>
									<FormControl>
										<Input
											type="password"
											placeholder="********"
											{...field}
											className="ltrDir"
										/>
									</FormControl>
									<FormDescription className="text-xs">
										ترکیب حروف بزرگ و کوچک انگلیسی با اعداد
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem>
									<FormLabel>شهر-کشور</FormLabel>
									<FormControl>
										<Input
											type="text"
											placeholder="Iran-Tehran"
											{...field}
											className="ltrDir"
										/>
									</FormControl>
									<FormDescription className="text-xs">
										فقط نام کشور و شهر را انگلیسی وارد کنید
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>تلفن</FormLabel>
									<FormControl>
										<Input type="tel" placeholder="918888800000" {...field} />
									</FormControl>
									<FormDescription className="text-xs">
										تلفن شما قابل مشاهده نخواهد بود
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full my-3 cursor-pointer">
							اعمال تغییرات
						</Button>
					</form>
				</Form>
			</SheetContent>
		</div>
	);
};

export default EditUser;
