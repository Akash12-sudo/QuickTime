import { createSlice } from '@reduxjs/toolkit';
import { turfDetailsArray } from '../../../../constants';

const initialState = {
  turflist: turfDetailsArray,
};

const turfSlice = createSlice({
  name: 'turfs',
  initialState,
  reducers: {
    updateTurflist: (state, action) => {
      state.turflist = action.payload;
    },
  },
});

export const { updateTurflist } = turfSlice.actions;

export default turfSlice.reducer;
