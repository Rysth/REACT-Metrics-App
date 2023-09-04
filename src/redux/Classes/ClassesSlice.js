import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchClasses = createAsyncThunk(
  'fetch/fetchClasses',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
        {
          headers: {
            'X-RapidAPI-Key':
              '94f122175fmsh15a6cd6a403b1bdp1a957cjsn334dbf5dc463',
            'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
          },
        },
      );
      return response.data.classes;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  classArray: [],
  isLoading: false,
};

const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClasses.fulfilled, (state, action) => {
      state.classArray = action.payload;
    });
  },
});

export const classesActions = classesSlice.actions;

export default classesSlice;
