import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface TasksState {
  tasks: Task[]
  loading: boolean
  error: string
}

const initialState: TasksState = {
  tasks: [],
  loading: false,
  error: '',
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export default tasksSlice.reducer;
export const { actions } = tasksSlice;
