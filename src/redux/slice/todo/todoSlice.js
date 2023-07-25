import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskList: [],
  selectedDate: '',
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.taskList = [...state.taskList, action.payload];
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setTaskIsDone: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id
          ? { ...task, isDone: action.payload.value }
          : task
      );
    },
    setTaskOnEdit: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id
          ? { ...task, isOnEdit: action.payload.value }
          : task
      );
    },

    saveEditedTask: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const {
  addNewTask,
  setSelectedDate,
  setTaskIsDone,
  setTaskOnEdit,
  saveEditedTask,
  deleteTask,
} = todoSlice.actions;

export const selectTaskList = (state) => state.todo.taskList;

export const selectTaskListByDate = (state) =>
  state.todo.taskList.filter((task) => task.date === state.todo.selectedDate);

export default todoSlice.reducer;
