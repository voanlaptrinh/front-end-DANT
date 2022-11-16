import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { signin, signup } from '../../api/auth';
import { User } from '../../types/user';

interface authState {
   loading: boolean,
   user: {
      email: string,
      accessToken: string,
      role_id: number
   },
   error: string
}

export const signUpByUser = createAsyncThunk(
   'user/signUpByUser',
   async (userData: User) => {
      const data = await signup(userData);
      return data;
   }
)

export const signInByUser = createAsyncThunk(
   'user/signinByUser',
   async (userData: User, { rejectWithValue }) => {
      try {
         const data = await signin(userData);
         toast.success('Đăng nhập thành công')


         return data;
      } catch (error: any) {
         toast.error(error.message);
         return rejectWithValue(error)
      }
   }
)

const initialState: authState = {
   loading: false,
   user: {
      email: '',
      accessToken: '',
      role_id: 0
   },
   error: ''
}

export const authSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {

   },
   extraReducers(builder) {
      builder.addCase(signInByUser.pending, (state, action) => {
         state.loading = true
      });
      builder.addCase(signInByUser.fulfilled, (state, action) => {
         state.loading = false;
         state.user = action.payload?.data;
         localStorage.setItem('user', JSON.stringify(state.user))
      });
      builder.addCase(signInByUser.rejected, (state, action) => {
         state.loading = false;

      })
   }
})

export default authSlice.reducer;