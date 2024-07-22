import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const makeStore = () => { // This function is used to create a new store for each request
    return configureStore({
        reducer: {
            counterSlice: counterReducer,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']