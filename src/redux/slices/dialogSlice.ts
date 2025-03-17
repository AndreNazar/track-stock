import { IProducts } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogState {
    dialogAddProduct: boolean
    dialogEditProduct: boolean
    dialogEditProductID: number
    dataDialogEdit: IProducts | null
}

const initialState: DialogState = {
    dialogAddProduct: false,
    dialogEditProduct: false,
    dialogEditProductID: -1,
    dataDialogEdit: null
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
    },
    openDialogEditProduct(state, action: PayloadAction<IProducts>) {
      state.dialogEditProduct = true
      state.dataDialogEdit = action.payload
    },
    closeDialogEditProduct(state) {
      state.dialogEditProduct = false
      state.dataDialogEdit = null
    }
  },
});

export const { 
  openDialogAddProduct, 
  closeDialogAddProduct,
  openDialogEditProduct, 
  closeDialogEditProduct
  
} = dialogSlice.actions;
export default dialogSlice.reducer;