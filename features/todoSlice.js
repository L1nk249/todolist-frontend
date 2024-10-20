import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: {
    bricolage: [],
    sport: [],
    ecole: [],
    courses: [],
  },
};
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { category, todo } = action.payload; // Vérifier que l'action contient bien la catégorie et le todo
      if (!category || !state.todos[category]) {
    return; // Ne rien faire si la catégorie est undefined ou n'existe pas
  }
      
      state.todos[category].push(todo); // Ajouter le todo à la catégorie correspondante
    },
    removeTodo: (state, action) => {
      const { category, index } = action.payload; // Passer la catégorie et l'index à supprimer
      state.todos[category].splice(index, 1);
    },
    removeAllTodosByCategory: (state, action) => {
      const categoryToRemove = action.payload;
      state.todos[categoryToRemove] = []; // Réinitialiser les todos de la catégorie
    },
  },
});

export const selectTodos = (state) => state.todo.todos; 

export const { addTodo, removeTodo, removeAllTodosByCategory } = todoSlice.actions;
export default todoSlice.reducer;