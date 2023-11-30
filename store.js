import { configureStore } from '@reduxjs/toolkit'
import navReducer from './sclices/navSlice'

export const store = configureStore({
    reducer: {
        nav: navReducer
    }
});

