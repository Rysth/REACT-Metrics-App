import { configureStore } from '@reduxjs/toolkit';
import classesSlice from './Classes/ClassesSlice';

const store = configureStore({
  reducer: {
    classes: classesSlice.reducer,
  },
});

export default store;
