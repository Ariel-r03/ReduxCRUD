import {
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
	{
		id: "1",
		name: "Peter Doe",
		email: "Peter@gmail.com",
		github: "Petercito",
	},
	{
		id: "2",
		name: "Lena Whitehouse",
		email: "Lena@gmail.com",
		github: "Lenita",
	},
	{
		id: "3",
		name: "Phil Less",
		email: "Phil@gmail.com",
		github: "Philly",
	},
];

export function ListOfUsers() {
	return (
		<Card>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Id</TableHeaderCell>
						<TableHeaderCell>Nombre</TableHeaderCell>
						<TableHeaderCell>Email</TableHeaderCell>
						<TableHeaderCell>Acciones</TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.name}>
							<TableCell>{item.id}</TableCell>
							<TableCell>{item.name}</TableCell>
							<TableCell>{item.email}</TableCell>
							<TableCell>Acciones</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
