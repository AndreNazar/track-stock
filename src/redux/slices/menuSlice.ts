import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  currentTab: number
  onMobileMenu: boolean
  isMobileMenu: boolean
}

const initialState: MenuState = {
    currentTab: 0,
    onMobileMenu: false,
    isMobileMenu: false
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    switchTab(state, action: PayloadAction<number>) {
      state.currentTab = action.payload;
    },
    openMobileMenu(state) {
      state.onMobileMenu = true;
    },
    closeMobileMenu(state) {
      state.onMobileMenu = false;
    },
    makeMobileMenu(state) {
      state.isMobileMenu = true;
    },
    removeMobileMenu(state) {
      state.isMobileMenu = false;
    },
  },
});

export const { switchTab, openMobileMenu, closeMobileMenu, makeMobileMenu, removeMobileMenu } = menuSlice.actions;
export default menuSlice.reducer;