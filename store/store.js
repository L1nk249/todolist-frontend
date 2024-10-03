import { configureStore } from '@reduxjs/toolkit';

// Importez vos slices ici
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer, // Ajouter le userReducer à votre store
  },
});

export default store;