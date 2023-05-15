// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import api from '../../axios';

// const initialState = {
//   location: [],
//   status: 'idle',
//   error: null,
// };
// // api/ads/createLocation

// export const addIlan = createAsyncThunk('ad/createlocation', async (body) => {
//   try {
//     const location = body.jsonLocation;
//     const response = await axios.post(
//       `${api}/api/ads/createLocation`,
//       { location },
//       {
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// });
// const locatSlice = createSlice({
//   name: 'locat',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(addIlan.pending, (state, action) => {
//       state.status = 'pending';
//     });
//     builder.addCase(addIlan.fulfilled, (state, action) => {
//       localStorage.setItem('location', JSON.stringify(action.payload));

//       state.status = 'resolved';
//       state.user.user = action.payload;
//       console.log(action.payload);
//     });
//     builder.addCase(addIlan.rejected, (state, action) => {
//       state.status = 'rejected';
//       state.error = action.error.message;
//     });
//   },
// });

// export const selectAllLocation = (state) => state.locat.location;
// export default locatSlice.reducer;
