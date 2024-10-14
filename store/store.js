import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilise le localStorage par défaut
import userReducer from '../features/userSlice';
const persistedReducer = persistReducer(persistConfig, userReducer);

// Configurer le store avec le reducer persistant
export const store = configureStore({
  reducer: {
    user: persistedReducer, // Utilise le reducer persistant
  },
  devTools: process.env.NODE_ENV !== 'production', // Outils de développement seulement en mode développement
});

// Créer un persistor
export const persistor = persistStore(store); // Exporter le persistor

export default store;