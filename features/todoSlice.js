import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   todos:[],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodoBricolage: (state, action) => {
        state.todos.push({ text: action.payload, category: 'Bricolage' });
      },

      addTodoSport: (state, action) => {
        state.todos.push({ text: action.payload, category: 'Sport' });
      },

      addTodoCourse: (state, action) => {
        state.todos.push({ text: action.payload, category: 'Course' });
      },


      addTodoEcole: (state, action) => {
        state.todos.push({ text: action.payload, category: 'Ecole' });
      },



      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo, index) => index !== action.payload);
      },
      removeAllTodosByCategory: (state, action) => {
        const categoryToRemove = action.payload;
        state.todos = state.todos.filter(todo => todo.category !== categoryToRemove);
      },
    

    },
  });
  export const selectTodos = (state) => state.todo.todos; 

  export const { addTodoBricolage,addTodoEcole,addTodoCourse,addTodoSport,removeTodo,removeAllTodosByCategory } = todoSlice.actions;
  export default todoSlice.reducer;