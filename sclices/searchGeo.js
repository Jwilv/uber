import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locations: [],
}

const locationSlice = createSlice({
    initialState,
    name: 'searchGeo',
    reducers: {
        setLocations: (state, action) => ({
            ...state,
            [state.locations]: action.payload,
        }),
        deleteLocations: (state) => ({
            ...state,
            [state.locations]: initialState.locations,
        })
    }
});

export const { setLocations, deleteLocations } = locationSlice.actions;

export const selectLocations = (state) => state.searchLocations.locations;

export default locationSlice.reducer