import { User, UserId, addNewUser, deleteUserById } from "../../Store/slice";
import { useAppDispatch } from "../../hooks/store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const addUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	};

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser, addUser };
};
