import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  dragoDisplayPerPage: number;
  walletAddress: string | null;
}

const initialState: SettingsState = {
  dragoDisplayPerPage: 5,
  walletAddress: null,
};

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state, action: PayloadAction<Partial<SettingsState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setSettings } = settingSlice.actions;
export default settingSlice.reducer;
