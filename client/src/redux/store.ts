import { configureStore } from '@reduxjs/toolkit';
import { ApartamentSlice } from './slice/apartment/apartament';
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        apartment: ApartamentSlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;



// import { UserInterface } from '../interfaces/user.interface';
// import { userSlice } from './slice/user';
// import { ApartamentInterface } from '../interfaces/apartament.interface';
// export interface AppStore {
//     user: UserInterface;
//     apartament: ApartamentInterface[];
// }
// // Configuracion del Store
// export default configureStore<AppStore>({
//     reducer: {
//         user: userSlice.reducer,
//         apartament: ApartamentSlice.reducer
//     }
// });