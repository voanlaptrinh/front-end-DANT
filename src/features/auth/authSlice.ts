import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup } from '../../api/auth';


interface authState {
   user: {
      fullName: string,
      email: string,
      phoneNumber: number,
      password: string,
      comfirmPassword: string,
   },
   accessToken: string
}

export const signUpByUser: any = createAsyncThunk(
   'auth,signUpByUser',
   async (userData: any, { rejectWithValue }) => {
      try {
         const data = await signup(userData);
         return data;
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const initialState: authState = {
   user: {
      fullName: '',
      email: '',
      phoneNumber: 0,
      password: '',
      comfirmPassword: '',
   },
   accessToken: ''
}

export const authSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder.addCase(signUpByUser.pending, (state, action) => {
         state.user = action.playload;
      }),
         builder.addCase(signUpByUser.fullfied, (state, action) => {

         }),
         builder.addCase(signUpByUser.rejected, (state, action) => {

         })
   },
})