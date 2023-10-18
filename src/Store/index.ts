import { Middleware, configureStore } from "@reduxjs/toolkit";
import { toast } from "sonner";
import usersReducer, { UserWithId, rollbackUser } from "./slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__REDUX__STORE", JSON.stringify(store.getState()));
	};

const syncWithDatabase: Middleware = (store) => (next) => (action) => {
	const { type, payload } = action;
	const userIdToRemove = payload;
	const previousState = store.getState();
	next(action);
	console.log(store.getState(), action.payload);
	if (type === "users/deleteUserById") {
		const userToRemove = previousState.users.find(
			(user: UserWithId) => user.id === userIdToRemove,
		);

		fetch(`https://jsonplaceholder.typicode.com/users/${payload}`, {
			method: "DELETE",
		})
			.then((res) => {
				if (res.ok) {
					toast.success(
						`El usuario ${userToRemove.name} ha sido eliminado correctamente`,
					);
				} else {
					throw new Error("Error al eliminar el usuario");
				}
			})
			.catch(() => {
				toast.error(`Error deleting user ${userToRemove}`);
				if (userToRemove) {
					store.dispatch(rollbackUser(userToRemove));
				}
			});
	}
};
export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceLocalStorageMiddleware, syncWithDatabase],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
