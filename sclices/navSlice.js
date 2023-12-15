import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: {
        location: '',
        coordinates: [],
    },
    destination: {
        location: '',
        coordinates: [],
    },
    routes: [],
    travelTimeInformation: null,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setRoutes : (state, action) => {
            state.routes = action.payload
        }
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setRoutes } = navSlice.actions;


//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectRoutes = (state) => state.nav.routes;

export default navSlice.reducer;