import { createSlice } from '@reduxjs/toolkit';
import { ApartamentInterface } from '../../../interfaces/apartament.interface';

interface ApartamentState {
    apartments: ApartamentInterface[]
}

const initialState: ApartamentState = {
    apartments: []
}

export const ApartamentSlice = createSlice({
    name: 'apartment',
    initialState: initialState,
    reducers: {
        getApartment: (state, action) => {
            state.apartments = action.payload.data
        }
    }
});


export default ApartamentSlice.reducer;

export const { getApartment } = ApartamentSlice.actions;