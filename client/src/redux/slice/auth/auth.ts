import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string | null;
}

const initialState: AuthState = {
    accessToken: null
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setAccessToken: (state, action: PayloadAction<string | null>) => {
            state.accessToken = action.payload;
        }
    }
})

export default AuthSlice.reducer;
export const { setAccessToken } = AuthSlice.actions;