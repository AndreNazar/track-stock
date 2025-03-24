import { ICalendarData, IContextBlock, IProducts } from './../../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DialogState {
    dialogAddProduct: boolean
    dialogEditProduct: boolean
    dataDialogEdit: IProducts | null
    dialogDeleteProduct: boolean
    deleteData: {id: number, name: string} | null
    contextBlock: IContextBlock | null
    calendarData: ICalendarData | null
}

const initialState: DialogState = {
    dialogAddProduct: false,
    dialogEditProduct: false,
    dataDialogEdit: null,
    dialogDeleteProduct: false,
    deleteData: null,
    contextBlock: null,
    calendarData: {
      date: "",
      isOpen: false,
    }
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
    },
    newContextBlock(state, action: PayloadAction<IContextBlock | null>) {
      state.contextBlock = action.payload
    },
    firstClickContextBlock(state) {
      state.contextBlock = {
        ...state.contextBlock,
        firstClick: false
      } as IContextBlock
    },
    closeContextBlock(state) {
      state.contextBlock = null
    },
    setCalendarData(state, action: PayloadAction<ICalendarData>) {
      state.calendarData = action.payload
    },
    closeCalendarData(state) {
      state.calendarData = null
    },
  },
});

export const { 
  openDialogAddProduct, 
  closeDialogAddProduct,
  openDialogEditProduct, 
  closeDialogEditProduct,
  openDialogDeleteProduct,
  closeDialogDeleteProduct,
  newContextBlock,
  closeContextBlock,
  firstClickContextBlock,
  setCalendarData,
  closeCalendarData,
} = dialogSlice.actions;
export default dialogSlice.reducer;