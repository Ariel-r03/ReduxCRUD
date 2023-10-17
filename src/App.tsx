import "./App.css";
import { CreateNewUser } from "./components/CreateNewUser";
import { ListOfUsers } from "./components/ListOfUsers";
function App() {
	return (
		<div>
			<ListOfUsers />
			<CreateNewUser />
		</div>
	);
}

export default App;
