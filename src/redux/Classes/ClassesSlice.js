import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClasses = createAsyncThunk(
  'fetch/fetchClasses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.open5e.com/v1/classes/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const existClassArray = JSON.parse(localStorage.getItem('classArray'));

const initialState = {
  classArray: existClassArray || [],
  isLoading: false,
};

const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      state.classArray = action.payload.results;
      localStorage.setItem('classArray', JSON.stringify(state.classArray));
    });
  },
});

export const classesActions = classesSlice.actions;

export default classesSlice;
