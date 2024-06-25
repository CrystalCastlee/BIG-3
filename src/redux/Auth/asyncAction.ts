import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuth } from "./slice";
import { post } from "../../api/baseRequest";
interface ISignIn {
    login: string,
    password: string,
}

interface ISignUp {
    userName: string,
    login: string,
    password: string,
}

export const signIn = createAsyncThunk<IAuth, ISignIn>(
    'auth/signIn', 
    async ({login, password}) => {
        const data = await post("/Auth/SignIn", JSON.stringify({ login, password }))
        console.log('data', data)
        return data
    }
  )

  
export const signUp = createAsyncThunk<IAuth, ISignUp>(
    'auth/signUp', 
    async ({userName, login, password}) => {
        const data = await post("/Auth/SignUp", JSON.stringify({ userName ,login, password }))
        console.log('data', data)
        return data
    }
  )