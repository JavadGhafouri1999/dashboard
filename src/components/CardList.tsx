import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
	{
		id: 1,
		title: "JavaScript",
		badge: "Coding",
		image: "https://api.frontendlead.com/wp-content/uploads/2024/04/1_LyZcwuLWv2FArOumCxobpA.png",
		count: 4300,
	},
	{
		id: 2,
		title: "Django",
		badge: "Coding",
		image: "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
		count: 10300,
	},
	{
		id: 3,
		title: "React",
		badge: "Coding",
		image: "https://media.designrush.com/articles/715021/conversions/8-Benefits-of-ReactJS--details.jpg",
		count: 8300,
	},
	{
		id: 4,
		title: "Nest.js",
		badge: "Coding",
		image: "https://cdn.intuji.com/2022/09/Nestjs_hero1.png",
		count: 2300,
	},
	{
		id: 5,
		title: "Next.js",
		badge: "Coding",
		image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F8w1hhq2um83lqlc5f0pp.jpg",
		count: 15300,
	},
];
const latestTransactions = [
	{
		id: 1,
		title: "هوش مصنوعی در صنعت چطور نابود شد؟",
		badge: "علی احمدی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/674c6fea952d2a29b4dedc0c_Therisn%20PFP%20(1).png",
		count: 4300,
	},
	{
		id: 2,
		title: "بهترین فریم ورک سال",
		badge: "محمد محمدی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654e8c588feb20ca79a0038b_63c8c7123c6fd629ee0acdc1_Cute%2520Fat%2520Lizard%2520PFP%2520for%2520Tiktok%25201.jpeg",
		count: 10300,
	},
	{
		id: 3,
		title: "چطور شروع کنیم؟",
		badge: "مهدی غفوری",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f67d19f3d5fb8dfefb79c_Cute%2520PFP%2520for%2520Tiktok%252045.png",
		count: 8300,
	},
	{
		id: 4,
		title: "شروعی بر پایان یک رویا",
		badge: "جواد غفوری",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f676cb9e598f636f80075_Cute%2520PFP%2520for%2520Tiktok%252040.png",
		count: 2300,
	},
	{
		id: 5,
		title: "پیش نیاز مهندسی",
		badge: "معین اصلانی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f681fe7863217b0356c7d_Cute%2520PFP%2520for%2520Tiktok%252049.png",
		count: 15300,
	},

	{
		id: 6,
		title: "مهندسی",
		badge: "علی اصلانی",
		image: "https://cdn.prod.website-files.com/62bdc93e9cccfb43e155104c/654f689a3ddf1915f5d57df0_Cute%2520PFP%2520for%2520Tiktok%25209.png",
		count: 300,
	},
];

const CardList = ({ title }: { title: string }) => {
	const list = title === "محتوای محبوب" ? popularContent : latestTransactions;

	return (
		<div>
			<h1 className="pb-2">{title}</h1>
			<div className="flex flex-col gap-2">
				{list.map((item) => (
					<Card
						key={item.title}
						className="overflow-hidden flex-row items-center justify-between gap-4 p-4">
						<div className="size-12 min-w-12 rounded-sm relative overflow-hidden">
							<Image
								fill
								src={item.image}
								alt={item.title}
								loading="lazy"
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<CardContent className="space-y-1 p-0 flex-1">
							<CardTitle className="text-sm font-medium px-0 max-w-56  md:max-w-36 truncate">
								{item.title}
							</CardTitle>
							<Badge
								variant="outline"
								className="bg-secondary text-secondary-foreground dark:bg-secondary font-light">
								جدیدترین
							</Badge>
						</CardContent>
						<CardFooter className="px-0 font-light text-sm">{item.count / 1000}k</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

export default CardList;
