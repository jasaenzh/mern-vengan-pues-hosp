import { configureStore } from '@reduxjs/toolkit';
import { UserInterface } from '../interfaces/user.interface';
import { userSlice } from './states/user';
import { ApartamentInterface } from '../interfaces/apartament.interface';
import { ApartamentSlice } from './states/apartament';

export interface AppStore {
    user: UserInterface;
    apartament: ApartamentInterface[];
}

// Configuracion del Store
export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer,
        apartament: ApartamentSlice.reducer
    }
});