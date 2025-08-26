import { Payment, columns } from "./colums";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
	return [
		{
			id: "728ed52f",
			status: "تایید شده",
			email: "m@example.com",
			username: "Michael_mark",
			profileImage:
				"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp",
		},
		{
			id: "2128ed52f",
			status: "غیرفعال",
			email: "jack@example.com",
			username: "jack_hue",
			profileImage:
				"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
		},
		{
			id: "2128ed52f",
			status: "بن شده",
			email: "mohammad@example.com",
			username: "mohammad_jamal",
			profileImage:
				"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
		},
	];
};

const PaymentsPage = async () => {
	const data = await getData();
	return (
		<div>
			<div className="mb-8 px-4 py-2 bg-secondary rounded-md">
				<h1 className="font-semibold text-xl py-2">کاربران</h1>
			</div>
			<DataTable columns={columns} data={data} />
		</div>
	);
};

export default PaymentsPage;
