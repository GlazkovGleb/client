import { combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './reducers/playerSlice'
import { createWrapper } from 'next-redux-wrapper'
import { trackApi } from '../services/TrackService'

const rootReducer = combineReducers({
    [playerSlice.name]: playerSlice.reducer,
    [trackApi.reducerPath]: trackApi.reducer
})

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(trackApi.middleware)
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']

export const wrapper = createWrapper(makeStore)