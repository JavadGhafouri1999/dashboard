import { columns } from "./columns";
import { DataTable } from "./data-table";

export type User = {
	userId: string;
	username: string;
	email: string;
	profileImage: string;
	status: "تایید شده" | "غیرفعال";
};

const getData = async (): Promise<User[]> => {
	return [
		{
			userId: "Zpsvvz",
			status: "تایید شده",
			email: "m@example.com",
			username: "Michael_mark",
			profileImage:
				"https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp",
		},
		{
			userId: "iHT1kI",
			status: "غیرفعال",
			email: "jack@example.com",
			username: "jack_hue",
			profileImage:
				"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
		},
		{
			userId: "fk94VW",
			status: "تایید شده",
			email: "mohammad@example.com",
			username: "mohammad_jamal",
			profileImage:
				"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
		},
	];
};

const UsersPage = async () => {
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

export default UsersPage;
