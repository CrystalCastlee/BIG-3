import { PayloadAction, current } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit"
import { signUp} from '../asyncAction';


export interface ISignUp{
    name: string | null,
    avatarUrl: string | null,
    token: string | null
}
const initialState: ISignUp = {
    name: null,
    avatarUrl: null,
    token: null,
}

const SignUpSlice = createSlice ({
    name: 'Auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(signUp.pending, (state, action) => {

        })
        builder.addCase(signUp.fulfilled, (state, {payload}) => {
            state.name = payload.name
            state.avatarUrl = payload.avatarUrl
            state.token = payload.token
          
        })
        builder.addCase(signUp.rejected, (state, action) => {
        })
      
    },
})

export default SignUpSlice.reducer