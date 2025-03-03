import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogState {
    dialogAddProduct: boolean
}

const initialState: DialogState = {
    dialogAddProduct: false,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialogAddProduct(state) {
      state.dialogAddProduct = true
    },
    closeDialogAddProduct(state) {
      state.dialogAddProduct = false
    }
  },
});

export const { openDialogAddProduct, closeDialogAddProduct} = dialogSlice.actions;
export default dialogSlice.reducer;