import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuType } from '../../types/types';

interface MenuState {
  currentTab: MenuType
  onMobileMenu: boolean
  isMobileMenu: boolean
}

const initialState: MenuState = {
    currentTab: "/account",
    onMobileMenu: false,
    isMobileMenu: false
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    switchTab(state, action: PayloadAction<MenuType>) {
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