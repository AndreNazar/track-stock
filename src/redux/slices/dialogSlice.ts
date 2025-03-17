import { IProducts } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogState {
    dialogAddProduct: boolean
    dialogEditProduct: boolean
    dataDialogEdit: IProducts | null
    dialogDeleteProduct: boolean
    deleteData: {id: number, name: string} | null
}

const initialState: DialogState = {
    dialogAddProduct: false,
    dialogEditProduct: false,
    dataDialogEdit: null,
    dialogDeleteProduct: false,
    deleteData: null
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
    },
    openDialogDeleteProduct(state, action: PayloadAction<{id: number, name: string}>) {
      state.dialogDeleteProduct = true
      state.deleteData = action.payload
    },
    closeDialogDeleteProduct(state) {
      state.dialogDeleteProduct = false
      state.deleteData = null
    }
  },
});

export const { 
  openDialogAddProduct, 
  closeDialogAddProduct,
  openDialogEditProduct, 
  closeDialogEditProduct,
  openDialogDeleteProduct,
  closeDialogDeleteProduct
  
} = dialogSlice.actions;
export default dialogSlice.reducer;