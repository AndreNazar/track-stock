import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { eLocalTab, ILocalTab, IProducts } from "../../types/types"

interface ProductState {
  productList: IProducts[]
  currentInfo: IProducts
  localTab: ILocalTab,
  currentInfoEditor: IProducts
  searchText: string
}

const initialState: ProductState = {
  productList: [],
  localTab: eLocalTab.inventory,
  searchText: "",
  currentInfo: {
    id: 1,
    name: "",
    brand: "",
    image: "",
    color: "",
    article: "",
    price_stockX: "",
    price_goat: "",
    price_poison: "",
    priceBuy: 0,
    condition: "",
    sizeUS: "",
    sizeUK: "",
    sizeEU: "",
    city: "",
    placeOfTransaction: "",
    checkedFitting: false,
    avg_price: "",
    inStore: false,
    isSale: false,
    dateBuy: "",
    priceSale: 0
  },
  currentInfoEditor: {
    id: 1,
    name: "",
    brand: "",
    image: "",
    color: "",
    article: "",
    price_stockX: "",
    price_goat: "",
    price_poison: "",
    priceBuy: 0,
    condition: "",
    sizeUS: "",
    sizeUK: "",
    sizeEU: "",
    city: "",
    placeOfTransaction: "",
    checkedFitting: false,
    avg_price: "",
    dateBuy: "",
    inStore: false,
    isSale: false,
    priceSale: 0
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
    changeSearchText(state, action: PayloadAction<string>) {
      state.searchText = action.payload
    },
    setLocalTab(state, action: PayloadAction<ILocalTab>) {
      state.localTab = action.payload
    },
  },
})

export const { setLocalTab, setCurrentInfo, changeCurrentInfo, setCurrentInfoEditor, changeCurrentInfoEditor, setProductList, addToProductList, changeSearchText } = productSlice.actions
export default productSlice.reducer
