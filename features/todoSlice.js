import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   todos:[],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addTodo: (state, action) => {
        state.todos.push(action.payload);
      },
      removeTodo: (state, action) => {
        state.todos = state.todos.filter((todo, index) => index !== action.payload);
      },


    },
  });
  export const selectTodos = (state) => state.todo.todos; 

  export const { addTodo,removeTodo } = todoSlice.actions;
  export default todoSlice.reducer;