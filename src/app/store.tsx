import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/data';
import tasksReducer from '../features/tasks';
import repoReducer from '../features/repo';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    tasks: tasksReducer,
    repo: repoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store;
