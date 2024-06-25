import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.token = action.payload.token;
            window.localStorage.setItem('token', action.payload.token);

        },
        removeUser(state) {
            state.token = null;
            window.localStorage.setItem('token', '');
        },
    }
})

export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer