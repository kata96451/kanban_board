import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Repo } from '../types/Repo';

const initialState: Repo | null = {
  id: 0,
  stargazers_count: 0,
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<Repo>) => ({
      id: action.payload.id,
      stargazers_count: action.payload.stargazers_count,
    }),
  },
});

export const { actions } = repoSlice;
export default repoSlice.reducer;
