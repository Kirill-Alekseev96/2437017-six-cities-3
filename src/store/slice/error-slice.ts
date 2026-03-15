import { createSlice } from '@reduxjs/toolkit';
import { setError } from '../action';

type errorState = {
  error: string | null;
}

const initialState :errorState = {
  error: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    /*Действие изм. ключа error*/
      .addCase(setError,(state, action) => {
        state.error = action.payload;
      });
  }
});

export default errorSlice.reducer;
