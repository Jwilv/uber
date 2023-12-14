import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOrigin: false,
    isMenuDestination: false,
}

const uiSlice = createSlice({
    initialState,
    name: 'ui',
    reducers: {
        setMenuOriginStatus: (state, action) => {
            state.isMenuOrigin = action.payload;
        },
        setMenuDestinationStatus: (state, action) => {
            state.isMenuDestination = action.payload;
        }
    }
});

export const { setMenuOriginStatus, setMenuDestinationStatus } = uiSlice.actions;

export const selectMenuOrigin = (state) => state.ui.isMenuOrigin;
export const selectMenuDestination = (state) => state.ui.isMenuDestination;

export default uiSlice.reducer;