import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchClasses = createAsyncThunk(
  'fetch/fetchClasses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.open5e.com/v1/classes/');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchClassBySlug = createAsyncThunk(
  'fetch/fetchClassBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.open5e.com/v1/classes/?slug=${slug}`,
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const existClassArray = JSON.parse(localStorage.getItem('classArray'));

const initialState = {
  classArray: existClassArray || [],
  classSelected: undefined,
};

const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    removeClassSelected(state) {
      state.classSelected = undefined;
    },
  },
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
