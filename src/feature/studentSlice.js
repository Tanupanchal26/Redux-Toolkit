import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    { id: 1, name: 'Tanya', age: 17, course: 'MERN', batch: 'October' },
    { id: 2, name: 'Urvi', age: 21, course: 'MERN', batch: 'November' },
    { id: 3, name: 'Lacki', age: 18, course: 'MERN', batch: 'September' },
    { id: 4, name: 'Ayan', age: 18, course: 'MERN', batch: 'September' },
    { id: 5, name: 'Krish', age: 19, course: 'MERN', batch: 'October' },
    { id: 6, name: 'Ronak', age: 19, course: 'MERN', batch: 'November' },
  ],
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    // Edit student
    editStudent: (state, action) => {
      const { id, name, age, course, batch } = action.payload;
      const existingStudent = state.students.find(student => student.id === id);
      if (existingStudent) {
        existingStudent.name = name;
        existingStudent.age = age;
        existingStudent.course = course;
        existingStudent.batch = batch;
      }
    },


 // Reducer for removing student
removeStudent: (state, action) => {
  return state.students.filter((student) => student.id !== action.payload);
}

  },
});

export const { editStudent, removestudent } = studentSlice.actions;
export default studentSlice.reducer;
