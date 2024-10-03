import { configureStore } from '@reduxjs/toolkit';

// Importez vos slices ici
import counterReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    // Ajoutez vos slices ici
    counter: counterReducer,
  },
});

export default store;