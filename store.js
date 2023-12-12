import { configureStore } from '@reduxjs/toolkit'
import navReducer from './sclices/navSlice'
import searchGeoReducer from './sclices/searchGeo'

export const store = configureStore({
    reducer: {
        // nav: navSlice.reducer
        nav: navReducer,
        // locations: locationSlice.reducer
        searchGeo: searchGeoReducer
    }
});

