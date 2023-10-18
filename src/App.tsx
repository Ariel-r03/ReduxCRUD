import { Toaster } from "sonner";
import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUsers } from "./components/ListOfUsers";
function App() {
	return (
		<div
			style={{ marginLeft: "15rem", marginRight: "15rem", marginTop: "2rem" }}
		>
			<ListOfUsers />
			<CreateNewUser />
			<Toaster richColors />
		</div>
	);
}

export default App;
