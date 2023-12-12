import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    locations: [],
}

const locationSlice = createSlice({
    initialState,
    name: 'searchGeo',
    reducers: {
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        deleteLocations: (state) => ({
            ...state,
            [state.locations]: initialState.locations,
        })
    }
});

export const { setLocations, deleteLocations } = locationSlice.actions;

export const selectLocations = (state) => state;

export default locationSlice.reducer