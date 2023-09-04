import { configureStore } from '@reduxjs/toolkit';
import classesSlice from './Classes/Classes';

const store = configureStore({
  reducer: {
    classes: classesSlice.reducer,
  },
});

export default store;
