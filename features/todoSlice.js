import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   todos:[],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state, action) => {// Pour s'inscrire
        state.todos.push = (action.payload);
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo, index) => index !== action.payload);
      },


    },
  });
  
  export const { addTodo,removeTodo } = todoSlice.actions;
  export default todoSlice.reducer;