import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
  const response = await axios.get('/tasks');

  return response.data;
});
// export default fetchTasks;
