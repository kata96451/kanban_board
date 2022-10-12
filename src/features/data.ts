import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    set: (_, action: PayloadAction<string[]>) => action.payload,
  },
});

export default dataSlice.reducer;
export const { actions } = dataSlice;
