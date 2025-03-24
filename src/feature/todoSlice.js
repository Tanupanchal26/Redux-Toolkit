import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [ ],
  //Action creater
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: nanoid(), text: action.payload });
    },

    updatetodo: (state, action) => { 
      const {id,newText}= action.payload
      const  todo= state.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }

    },

    removetodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, updatetodo, removetodo } = todoSlice.actions;
export default todoSlice.reducer;
