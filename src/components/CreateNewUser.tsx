import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/UseUserActions/useUserActions";
export function CreateNewUser() {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko" | null>();

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;
		if (!name || !email || !github) {
			return setResult("ko");
		}
		addUser({ name, email, github });
		setResult("ok");
		form.reset();
	};
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>
			<form onSubmit={handleSubmit}>
				<TextInput name="name" placeholder="Aqui el nombre" />
				<TextInput name="email" placeholder="Aqui el email" />
				<TextInput name="github" placeholder="Aqui el github" />

				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear usuario
					</Button>
				</div>
				<span>
					{result === "ok" && (
						<Badge color="green">Guardado correctamente</Badge>
					)}
					{result === "ko" && <Badge color="red">Ha ocurrido un error</Badge>}
				</span>
			</form>
		</Card>
	);
}

export default CreateNewUser;
