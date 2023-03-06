import { createSlice } from '@reduxjs/toolkit';

interface CalcState {
  value: string;
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: '0',
  } as CalcState,
  reducers: {
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = calculatorSlice.actions;
export default calculatorSlice.reducer;
