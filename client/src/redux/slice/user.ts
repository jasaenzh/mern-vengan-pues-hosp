import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../interfaces";
import { persistLocalStorageUser, clearLocalStorageUser } from "../../utils/localStorage";

const UserInitialState: UserInterface = {
    id: 0,
    name: "",
    email: "",
}

export const UserKey = 'user';

// Creo el estado inicial del usuario
export const userSlice = createSlice({
    name: "user",
    initialState: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : UserInitialState,
    reducers: {
        createUser: (_state, action) => {
            persistLocalStorageUser<UserInterface>(UserKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            persistLocalStorageUser<UserInterface>(UserKey, action.payload);
            return {
                ...state,
                ...action.payload,
            }
        },
        resetUser: () => {
            clearLocalStorageUser(UserKey);
            return UserInitialState;
        }
    }
})

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;