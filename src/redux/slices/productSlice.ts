import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProducts } from "../../types/types"

interface ProductState {
  productList: IProducts[]
  currentInfo: IProducts
  currentInfoEditor: IProducts
}

const initialState: ProductState = {
  productList: [],
  currentInfo: {
    id: 1,
    name: "",
    brand: "",
    image: "",
    color: "",
    article: "",
    release_date: "",
    price_stockX: "",
    price_goat: "",
    price_outofstock: "",
    price_poison: "",
    priceBuy: 0,
    priceDelivery: 0,
    condition: "",
    sizeUS: "",
    sizeUK: "",
    sizeEU: "",
    city: "",
    placeOfTransaction: "",
    checkedFitting: false,
  },
  currentInfoEditor: {
    id: 1,
    name: "",
    brand: "",
    image: "",
    color: "",
    article: "",
    release_date: "",
    price_stockX: "",
    price_goat: "",
    price_outofstock: "",
    price_poison: "",
    priceBuy: 0,
    priceDelivery: 0,
    condition: "",
    sizeUS: "",
    sizeUK: "",
    sizeEU: "",
    city: "",
    placeOfTransaction: "",
    checkedFitting: false,
  },
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentInfo(state, action: PayloadAction<IProducts>) {
      state.currentInfo = action.payload
    },
    changeCurrentInfo(state, action: PayloadAction<{ key: string; value: string | number | boolean }>) {
      state.currentInfo = { ...state.currentInfo, [action.payload.key]: action.payload.value }
    },
    setCurrentInfoEditor(state, action: PayloadAction<IProducts>) {
      state.currentInfoEditor = action.payload
    },
    changeCurrentInfoEditor(state, action: PayloadAction<{ key: string; value: string | number | boolean }>) {
      console.log(action.payload.key, action.payload.value)
      console.log(state.currentInfoEditor)
      return {
        ...state,
        currentInfoEditor: {
          ...state.currentInfoEditor,
          [action.payload.key]: action.payload.value,
        },
      }
    },
    
    setProductList(state, action: PayloadAction<IProducts[]>) {
      state.productList = action.payload
    },
    addToProductList(state, action: PayloadAction<IProducts>) {
      state.productList = [
        ...state.productList,
        action.payload
      ]
    },
  },
})

export const { setCurrentInfo, changeCurrentInfo, setCurrentInfoEditor, changeCurrentInfoEditor, setProductList, addToProductList } = productSlice.actions
export default productSlice.reducer
