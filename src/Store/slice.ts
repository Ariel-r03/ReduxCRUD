import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

export type UserId = string;

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Peter Doe",
		email: "Peter@gmail.com",
		github: "ariel-r03",
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

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__REDUX__STORE");
	if (persistedState) {
		return JSON.parse(persistedState).users;
	}
	return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState: initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);

			if (!isUserAlreadyDefined) {
				return [...state, action.payload];
			}
		},
	},
});

export default usersSlice.reducer;

export const { deleteUserById, addNewUser, rollbackUser } = usersSlice.actions;
