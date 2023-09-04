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

export const fetchClassBySlug = createAsyncThunk(
  'fetch/fetchClassBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.open5e.com/v1/classes/?slug=${slug}`,
      );
      return response.data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const existClassArray = JSON.parse(localStorage.getItem('classArray'));

const initialState = {
  classArray: existClassArray || [],
  classSelected: {},
};

const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      const updateArray = action.payload.results;
      state.classArray = updateArray;
      localStorage.setItem('classArray', JSON.stringify(state.classArray));
    });
    builder.addCase(fetchClassBySlug.fulfilled, (state, action) => {
      state.classSelected = {
        ...action.payload[0],
      };
    });
  },
});

export const classesActions = classesSlice.actions;

export default classesSlice;
