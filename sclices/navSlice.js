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
    travelTimeInformation: {
        distance: 0,
        duration: 0,
    },
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
        setRoutes: (state, action) => {
            state.routes = action.payload
        },
        setTravel: (state, action) => {
            state.travelTimeInformation = action.payload
        }
    },
});

export const { setOrigin, setDestination, setTravelTimeInformation, setRoutes, setTravel } = navSlice.actions;


//selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectRoutes = (state) => state.nav.routes;
export const selectTravel = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;