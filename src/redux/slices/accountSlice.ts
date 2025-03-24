import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccount } from '../../types/types';

interface AccountState {
  accountInfo: IAccount;
}

const initialState: AccountState = {
    accountInfo: {
        name: '',
        lastname: '',
        nickname: '',
        email: '',
        vk_link: '',
        showTG: false,
        showVK: false,
    },
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount(state, action: PayloadAction<IAccount>) {
      state.accountInfo = action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;