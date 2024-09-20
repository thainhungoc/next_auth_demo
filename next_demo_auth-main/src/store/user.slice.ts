
import apis from "@/apis";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number,
    userName: string,
    email: string,
    email_verified: boolean,
    name: string,
}

interface UserState {
    data: User | null,
}

const initialState: UserState = {
    data: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getUserData.fulfilled, (state, action) => {
                state.data = action?.payload?.data;
        })
    },
})

export const getUserData = createAsyncThunk(
    "user/getUserData",
    async () => {
        let token = localStorage.getItem("token");
        if(!token) {
            return null
        }
        return await apis.user.getData(token);
    }
)


export const userReducer = userSlice.reducer;
export const userAction = {
    ...userSlice.actions,
    getUserData,
};