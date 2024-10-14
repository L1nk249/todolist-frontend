import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer} from 'redux-persist';
import userReducer from '../features/userSlice';
import todoReducer from '../features/todoSlice';
import storage from 'redux-persist/lib/storage'; // Utilise localStorage par défaut


const persistConfig = {
  key: 'root', // Clé principale pour le stockage
  storage, // Utilise localStorage pour stocker l'état
};
const persistedReducer = persistReducer(persistConfig, userReducer,todoReducer);

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