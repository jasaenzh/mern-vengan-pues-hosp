import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { AuthSlice } from './slice/auth/auth';
import { ApartamentSlice } from './slice/apartment/apartament';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: ['accessToken']
}


export const store = configureStore({
    reducer: {
        apartment: ApartamentSlice.reducer,
        auth: persistReducer<ReturnType<typeof AuthSlice.reducer>>(persistAuthConfig, AuthSlice.reducer)
    },
    middleware: (defaultMiddleware) => defaultMiddleware({
        serializableCheck: false
    })
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export const persistor = persistStore(store)
