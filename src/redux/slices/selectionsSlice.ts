import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectionState {
  currentContext: {
    profit: number,
    analysisSize: number,
    brands: number,
    statuses: number,
  }
}

const initialState: SelectionState = {
  currentContext: {
    profit: 0,
    analysisSize: 0,
    brands: 0,
    statuses: 0,
  }
};

const selectionsSlice = createSlice({
  name: 'selections',
  initialState,
  reducers: {
    selectCurrentContext(state, action: PayloadAction<{idx: number, type: string}>) {
      state.currentContext = {
        ...state.currentContext,
        [action.payload.type]: action.payload.idx
      }
    },
    clearSelections(state) {
      state.currentContext = {
        ...state.currentContext,
        brands: -1,
        statuses: -1,
      }
    },
  },
});

export const { 
  selectCurrentContext,
  clearSelections
} = selectionsSlice.actions;
export default selectionsSlice.reducer;