import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  reducers: {
    // Виконається в момент старту HTTP-запиту
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = null;
      state.error = action.payload;
    },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  taskSlice.actions;
export default taskSlice.reducer;
