import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectionState {
  currentContext: number
}

const initialState: SelectionState = {
  currentContext: 0,
};

const selectionsSlice = createSlice({
  name: 'selections',
  initialState,
  reducers: {
    selectCurrentContext(state, action: PayloadAction<number>) {
      state.currentContext = action.payload
    },
  },
});

export const { 
  selectCurrentContext, 
} = selectionsSlice.actions;
export default selectionsSlice.reducer;