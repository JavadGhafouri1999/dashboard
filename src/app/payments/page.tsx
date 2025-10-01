import { columns } from "./columns";
import { DataTable } from "./data-table";

export type Payment = {
	id: string;
	amount: number;
	userId: string;
	status: "در حال برسی" | "در حال انجام" | "موفقیت آمیز" | "لغو شده";
	email: string;
	username: string;
};

const getData = async (): Promise<Payment[]> => {
	return [
		{
			id: "728ed52f",
			userId: "1823667543",
			amount: 100000,
			status: "در حال برسی",
			email: "m@example.com",
			username: "Michael Chen",
		},
		{
			id: "728ed52f",
			userId: "1143615563",
			amount: 450000,
			status: "موفقیت آمیز",
			email: "m@example.com",
			username: "Michael Chen",
		},
		{
			id: "728ed52f",
			userId: "2293437081",
			amount: 33000,
			status: "موفقیت آمیز",
			email: "m@example.com",
			username: "Michael Chen",
		},
		{
			id: "728ed52f",
			userId: "3326316196",
			amount: 204000,
			status: "موفقیت آمیز",
			email: "m@example.com",
			username: "Michael Chen",
		},
		{
			id: "728ed52f",
			userId: "2149341695",
			amount: 7800000,
			status: "لغو شده",
			email: "m@example.com",
			username: "Michael Chen",
		},
		{
			id: "489e1d42",
			userId: "1833199470",
			amount: 125000,
			status: "در حال انجام",
			email: "example@gmail.com",
			username: "Sarah Johnson",
		},
		{
			id: "a3b5c7d9",
			userId: "165745394",
			amount: 200000,
			status: "موفقیت آمیز",
			email: "john.doe@company.com",
			username: "John Doe",
		},
		{
			id: "e8f2g4h6",
			userId: "3240684277",
			amount: 75000,
			status: "لغو شده",
			email: "sarah.smith@business.org",
			username: "Sarah Smith",
		},
		{
			id: "j1k3m5n7",
			userId: "2198627363",
			amount: 350000,
			status: "در حال انجام",
			email: "admin@startup.io",
			username: "Alex Rivera",
		},
		{
			id: "p9q2r4s6",
			userId: "332459351",
			amount: 50000,
			status: "در حال برسی",
			email: "customer.support@service.com",
			username: "David Wilson",
		},
		{
			id: "t8u1v3w5",
			userId: "1094422131",
			amount: 425000,
			status: "موفقیت آمیز",
			email: "billing@enterprise.net",
			username: "Emma Thompson",
		},
		{
			id: "x7y9z2a4",
			userId: "2851462871",
			amount: 150000,
			status: "لغو شده",
			email: "user123@domain.co",
			username: "James Anderson",
		},
		{
			id: "b6c8d0e2",
			userId: "4077336226",
			amount: 275000,
			status: "در حال انجام",
			email: "payments@merchant.com",
			username: "Maria Garcia",
		},
		{
			id: "f4g6h8j0",
			userId: "910093054",
			amount: 90000,
			status: "در حال برسی",
			email: "client@agency.design",
			username: "Robert Zhang",
		},
		{
			id: "k2l4m6n8",
			userId: "432583232",
			amount: 600000,
			status: "موفقیت آمیز",
			email: "premium@member.io",
			username: "Jennifer Lee",
		},
		{
			id: "p0r2t4v6",
			userId: "165048455",
			amount: 180000,
			status: "لغو شده",
			email: "support@helpdesk.tech",
			username: "Thomas Brown",
		},
		{
			id: "x8z0b2d4",
			userId: "645886483",
			amount: 320000,
			status: "در حال انجام",
			email: "finance@corporation.biz",
			username: "Lisa Taylor",
		},
		{
			id: "f6h8j0l2",
			userId: "2859931568",
			amount: 45000,
			status: "در حال برسی",
			email: "test.user@demo.app",
			username: "Kevin Martin",
		},
		{
			id: "r4t6y8u1",
			userId: "2178573264",
			amount: 2140000,
			status: "موفقیت آمیز",
			email: "customer1234@shop.com",
			username: "Nancy White",
		},
	];
};

const PaymentsPage = async () => {
	const data = await getData();
	return (
		<div>
			<div className="mb-8 px-4 py-2 bg-secondary rounded-md">
				<h1 className="font-semibold text-xl py-2">تمام سفارشات</h1>
			</div>
			<DataTable columns={columns} data={data} />
		</div>
	);
};

export default PaymentsPage;
