import { FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE, PERSIST, persistReducer, persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
// import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import userReducer from './slice/userSlice'
// import persistStore from 'redux-persist/es/persistStore'

const persistConfig = { key: 'root', version: 1, storage }
const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)