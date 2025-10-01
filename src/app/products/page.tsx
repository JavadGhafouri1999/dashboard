import { columns } from "./columns";
import { DataTable } from "./data-table";

export type Products = {
	productId: string;
	productName: string;
	quantity: number;
	status: "درانبار" | "در حال تامین" | "اتمام موجودی";
	price: number;
	sizes: string[];
	colors: string[];
};

const getData = async (): Promise<Products[]> => {
	return [
		{
			productId: "1828230770",
			price: 395000,
			status: "درانبار",
			quantity: 60,
			productName: "تی‌شرت آدیداس CoreFit",
			sizes: ["S", "M", "L", "XL"],
			colors: ["gray", "purple", "green"],
		},
		{
			productId: "2847144760",
			price: 590000,
			status: "درانبار",
			quantity: 60,
			productName: "ژاکت گرم زیپ‌دار پوما",
			sizes: ["S", "M", "L", "XL"],
			colors: ["gray", "green"],
		},
		{
			productId: "3916790519",
			price: 690000,
			status: "اتمام موجودی",
			quantity: 100,
			productName: "پولوشرت نایک Air Essentials",
			sizes: ["S", "M", "L"],
			colors: ["green", "blue", "black"],
		},
		{
			productId: "1697810828",
			price: 290000,
			status: "درانبار",
			quantity: 100,
			productName: "تی‌شرت نایک Dri Flex",
			sizes: ["S", "M", "L"],
			colors: ["white", "pink"],
		},
		{
			productId: "3774270800",
			price: 490000,
			status: "اتمام موجودی",
			quantity: 60,
			productName: "ژاکت Under Armour StormFleece",
			sizes: ["S", "M", "L"],
			colors: ["red", "orange", "black"],
		},
		{
			productId: "3793698986",
			price: 500000,
			status: "در حال تامین",
			quantity: 90,
			productName: "کفش نایک Air Max 270",
			sizes: ["40", "42", "43", "44"],
			colors: ["gray", "white"],
		},
		{
			productId: "239683625",
			price: 720000,
			status: "درانبار",
			quantity: 100,
			productName: "کفش نایک Ultraboost Pulse",
			sizes: ["40", "42", "43"],
			colors: ["gray", "pink"],
		},
		{
			productId: "773133501",
			price: 350000,
			status: "اتمام موجودی",
			quantity: 70,
			productName: "شلوار جین کلاسیک لیوایز",
			sizes: ["S", "M", "L"],
			colors: ["blue", "green"],
		},
	];
};

const ProductPage = async () => {
	const data = await getData();
	return (
		<div>
			<div className="mb-8 px-4 py-2 bg-secondary rounded-md">
				<h1 className="font-semibold text-xl py-2">محصولات</h1>
			</div>
			<DataTable columns={columns} data={data} />
		</div>
	);
};

export default ProductPage;
