import { z } from "zod";

export const sizeSchema = z.enum(["S", "M", "L", "XL", "XXL"]);
export const sizesSchema = z.array(sizeSchema).min(1, "حداقل یک سایز باید انتخاب شود");

export const colorSchema = z.enum(["red", "blue", "green", "black", "white"]);
export const colorsSchema = z.array(colorSchema).min(1, "حداقل یک رنگ باید انتخاب شود");

export const productFormSchema = z.object({
	productName: z
		.string()
		.min(2, { message: "نام محصول حداقل 2 حرف است" })
		.max(48, { message: "نام محصول نباید بیشتر از 48 حرف باشد" }),
	price: z
		.number()
		.min(0, { message: "قیمت محصول نمیتواند کمتر از 0 باشد" })
		.max(100000000, { message: "قیمت محصول نباید بیشتر از 50،000،000 تومان باشد" }),
	quantity: z
		.number()
		.min(0, { message: "تعداد محصول نمیتواند کمتر از 0 باشد" })
		.max(1000, { message: "تعداد محصول نباید بیشتر از 1000 باشد" }),
	status: z.enum(["درانبار", "در حال تامین", "اتمام موجودی"], {
		message: "وضعیت باید یکی از مقادیر معتبر باشد",
	}),
	sizes: sizesSchema,
	colors: colorsSchema,
});
