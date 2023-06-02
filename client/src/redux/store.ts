import { configureStore } from '@reduxjs/toolkit';
import { UserInterface } from '../interfaces/user.interface';
import { userSlice } from './states/user';

export interface AppStore {
    user: UserInterface;
}

// Configuracion del Store
export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
});