import { PayloadAction, current } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit"
import { signIn } from './asyncAction';

export interface IAuth{
    name: string | null,
    avatarUrl: string | null,
    token: string | null
}
const initialState: IAuth = {
    name: null,
    avatarUrl: null,
    token: null,
}

const AuthSlice = createSlice ({
    name: 'Auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state, action) => {

        })
        builder.addCase(signIn.fulfilled, (state, {payload}) => {
            state.name = payload.name
            state.avatarUrl = payload.avatarUrl
            state.token = payload.token
          
        })
        builder.addCase(signIn.rejected, (state, action) => {
        })
      
    },
})

export default AuthSlice.reducer