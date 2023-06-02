import { createSlice } from '@reduxjs/toolkit';
import { ApartamentInterface } from '../../interfaces/apartament.interface';

const ApartamentState: ApartamentInterface[] = []

export const ApartamentSlice = createSlice({
    name: 'apartment',
    initialState: ApartamentState,
    reducers: {
        getApartment: (_state, action) => {
            return action.payload
        }
    }
});

export const { getApartment } = ApartamentSlice.actions;
export default ApartamentSlice.reducer;