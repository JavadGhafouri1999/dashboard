import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { formatPrice } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

const popularProducts = [
	{
		id: 1,
		name: "تی‌شرت آدیداس CoreFit",
		shortDescription: "لباسی راحت و مناسب برای فعالیت‌های روزمره.",
		description:
			"این تی‌شرت از پارچه‌ای نرم و سبک تهیه شده که مناسب ورزش و استفاده روزانه است. طراحی ساده و رنگ‌های متنوع آن، انتخابی عالی برای استایل اسپرت شماست.",
		price: 395000,
		sizes: ["S", "M", "L", "XL"],
		colors: ["gray", "purple", "green"],
		images: {
			gray: "/products/1g.png",
			purple: "/products/1p.png",
			green: "/products/1gr.png",
		},
	},
	{
		id: 2,
		name: "ژاکت گرم زیپ‌دار پوما",
		shortDescription: "ژاکتی گرم و راحت برای فصل‌های سرد.",
		description:
			"این ژاکت با طراحی زیپ‌دار و پارچه گرم، انتخابی مناسب برای روزهای سرد سال است. ترکیب راحتی و استایل اسپرت را در کنار هم دارد.",
		price: 590000,
		sizes: ["S", "M", "L", "XL"],
		colors: ["gray", "green"],
		images: { gray: "/products/2g.png", green: "/products/2gr.png" },
	},
	{
		id: 3,
		name: "پولوشرت نایک Air Essentials",
		shortDescription: "لباسی سبک و مناسب برای فعالیت‌های ورزشی.",
		description:
			"پولوشرت نایک با طراحی مدرن و رنگ‌های جذاب، مناسب ورزش و استفاده روزمره است. پارچه تنفس‌پذیر آن راحتی را در طول روز تضمین می‌کند.",
		price: 690000,
		sizes: ["S", "M", "L"],
		colors: ["green", "blue", "black"],
		images: {
			green: "/products/3gr.png",
			blue: "/products/3b.png",
			black: "/products/3bl.png",
		},
	},
	{
		id: 4,
		name: "تی‌شرت نایک Dri Flex",
		shortDescription: "تی‌شرتی سبک و جذب‌کننده رطوبت.",
		description:
			"این تی‌شرت با تکنولوژی Dri-FIT طراحی شده تا رطوبت را جذب کرده و بدن را خشک نگه دارد. مناسب برای تمرینات ورزشی و استفاده روزانه.",
		price: 290000,
		sizes: ["S", "M", "L"],
		colors: ["white", "pink"],
		images: { white: "/products/4w.png", pink: "/products/4p.png" },
	},
	{
		id: 5,
		name: "ژاکت Under Armour StormFleece",
		shortDescription: "ژاکتی گرم با طراحی مقاوم در برابر باد.",
		description:
			"ژاکت StormFleece با پارچه مقاوم در برابر باد و طراحی گرم، انتخابی مناسب برای فضای باز و فعالیت‌های زمستانی است.",
		price: 490000,
		sizes: ["S", "M", "L"],
		colors: ["red", "orange", "black"],
		images: {
			red: "/products/5r.png",
			orange: "/products/5o.png",
			black: "/products/5bl.png",
		},
	},
	{
		id: 6,
		name: "کفش نایک Air Max 270",
		shortDescription: "کفشی راحت با طراحی مدرن.",
		description:
			"کفش Air Max 270 با طراحی خاص و کفی نرم، مناسب برای پیاده‌روی و استفاده روزانه است. ترکیبی از راحتی و استایل اسپرت.",
		price: 500000,
		sizes: ["40", "42", "43", "44"],
		colors: ["gray", "white"],
		images: { gray: "/products/6g.png", white: "/products/6w.png" },
	},
	{
		id: 7,
		name: "کفش نایک Ultraboost Pulse",
		shortDescription: "کفشی مناسب برای دویدن و تمرین.",
		description:
			"Ultraboost Pulse با طراحی سبک و کفی ارتجاعی، انتخابی عالی برای ورزشکاران و علاقه‌مندان به دویدن است.",
		price: 720000,
		sizes: ["40", "42", "43"],
		colors: ["gray", "pink"],
		images: { gray: "/products/7g.png", pink: "/products/7p.png" },
	},
	{
		id: 8,
		name: "شلوار جین کلاسیک لیوایز",
		shortDescription: "شلواری با طراحی کلاسیک و دوام بالا.",
		description:
			"شلوار جین لیوایز با طراحی کلاسیک و پارچه باکیفیت، مناسب استفاده روزانه و استایل کژوال است.",
		price: 350000,
		sizes: ["S", "M", "L"],
		colors: ["blue", "green"],
		images: { blue: "/products/8b.png", green: "/products/8gr.png" },
	},
];

const latestTransactions = [
	{
		id: 1,
		title: "سفارش کالا",
		badge: "علی احمدی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/674c6fea952d2a29b4dedc0c_Therisn%20PFP%20(1).png",
		price: 43000000,
	},
	{
		id: 2,
		title: "سفارش کالا",
		badge: "محمد محمدی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654e8c588feb20ca79a0038b_63c8c7123c6fd629ee0acdc1_Cute%2520Fat%2520Lizard%2520PFP%2520for%2520Tiktok%25201.jpeg",
		price: 1030000,
	},
	{
		id: 3,
		title: "سفارش کالا",
		badge: "مهدی غفوری",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f67d19f3d5fb8dfefb79c_Cute%2520PFP%2520for%2520Tiktok%252045.png",
		price: 83000,
	},
	{
		id: 4,
		title: "سفارش کالا",
		badge: "جواد غفوری",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f676cb9e598f636f80075_Cute%2520PFP%2520for%2520Tiktok%252040.png",
		price: 230000,
	},
	{
		id: 5,
		title: "سفارش کالا",
		badge: "معین اصلانی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f681fe7863217b0356c7d_Cute%2520PFP%2520for%2520Tiktok%252049.png",
		price: 1530000,
	},

	{
		id: 6,
		title: "سفارش کالا",
		badge: "علی اصلانی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f689a3ddf1915f5d57df0_Cute%2520PFP%2520for%2520Tiktok%25209.png",
		price: 399000,
	},
	{
		id: 7,
		title: "سفارش کالا",
		badge: "علی فراهانی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f689a3ddf1915f5d57df0_Cute%2520PFP%2520for%2520Tiktok%25209.png",
		price: 399000,
	},
];

const CardList = ({ title }: { title: string }) => {
	return (
		<div>
			<h1 className="pb-2">{title}</h1>
			<ScrollArea dir="rtl" className="h-[490px] mt-4">
				<div className="space-y-3 pl-4">
					{title === "محصولات محبوب"
						? popularProducts.map((item) => (
								<Card
									key={item.name}
									className="overflow-hidden flex-row items-center justify-between gap-2 p-4">
									<div className="size-10 min-w-10 rounded-sm relative overflow-hidden">
										<Image
											fill
											src={Object.values(item.images)[0] || ""}
											alt={item.name}
											loading="lazy"
											className="object-cover"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<CardContent className="space-y-1 p-0 flex-1">
										<CardTitle className="text-xs font-medium px-0 max-w-56  md:max-w-36 truncate">
											{item.name}
										</CardTitle>
										<Badge
											variant="outline"
											className="bg-secondary text-secondary-foreground dark:bg-secondary font-light">
											جدیدترین
										</Badge>
									</CardContent>
									<CardFooter className="px-0 font-light text-sm">
										{formatPrice(item.price)}
									</CardFooter>
								</Card>
						  ))
						: latestTransactions.map((payUser) => (
								<Card
									key={payUser.badge}
									className="overflow-hidden flex-row items-center justify-between gap-4 p-4">
									<div className="size-12 min-w-12 rounded-sm relative overflow-hidden">
										<Image
											fill
											src={payUser.image || ""}
											alt={payUser.badge}
											loading="lazy"
											className="object-cover"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										/>
									</div>
									<CardContent className="space-y-1 p-0 flex-1">
										<CardTitle className="text-sm font-medium px-0 max-w-56  md:max-w-36 truncate">
											{payUser.title}
										</CardTitle>
										<Badge
											variant="outline"
											className="bg-secondary text-secondary-foreground dark:bg-secondary font-light">
											جدیدترین
										</Badge>
									</CardContent>
									<CardFooter className="px-0 font-light text-sm flex items-center gap-1">
										<p className="text-sm font-medium">{formatPrice(payUser.price)}</p>
										<p className="text-xs text-gray-500">تومان</p>
									</CardFooter>
								</Card>
						  ))}
				</div>
			</ScrollArea>
		</div>
	);
};

export default CardList;
