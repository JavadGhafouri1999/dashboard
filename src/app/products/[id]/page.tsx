import EditProduct from "@/components/EditProduct";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { ChartLineMultiple } from "@/components/UserMultipleLineChart";
import Link from "next/link";

const SingleProductPage = () => {
	return (
		<div>
			{/* Breadcrumb */}
			<Breadcrumb dir="rtl">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/">صفحه اصلی</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/products">محصولات</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>محصول شماره 10</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="m-4 flex flex-col xl:flex-row gap-8">
				{/* Product Info */}
				<div className="w-full xl:w-1/3 space-y-6">
					{/* Information */}
					<div className="bg-primary-foreground p-4 rounded-lg">
						<div className="flex items-center justify-between">
							<h1 className="text-xl font-semibold">اطلاعات کاربر</h1>
							<div className="flex items-center justify-between">
								<Sheet>
									<SheetTrigger asChild>
										<Button variant="outline">بروزرسانی</Button>
									</SheetTrigger>
									<EditProduct />
								</Sheet>
							</div>
						</div>
						<div className="space-y-4 mt-4">
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
								<span className="text-sm text-muted-foreground">عضویت : </span>
								<span className="text-sm pt-1">1400/03/23</span>
							</div>
						</div>
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

export default SingleProductPage;
