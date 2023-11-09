import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../Api';
export const createUser = createAsyncThunk(
    "user/createUser",
    async (param, { rejectWithValue }) => {
        try {
            const response = await api.post("/user", param);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const getalluser = createAsyncThunk(
    "user/getalluser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/user");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const updateUser = createAsyncThunk(
    "user/updateUser",
    async ({ id, data }) => {
        try {
            const response = await api.patch(`/user/${id}`, data);
            console.log(response);
            return response.data;
        } catch (err) {
            return console.log(err.response.data);
        }
    }
);
const initialState = {
    user: [],
    allUsers: [],
    loading: false,
    error: ''
}

export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [createUser.pending]: (state, { meta, payload }) => {
            state.loading = true;
        },
        [createUser.fulfilled]: (state, { meta, payload }) => {
            state.loading = false;
            state.user = payload
        },
        [getalluser.pending]: (state, action) => {
            state.loading = true;
        },
        [getalluser.fulfilled]: (state, { meta, payload }) => {
            state.loading = false;
            state.allUsers = payload;
        },
        [getalluser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [updateUser.pending]: (state, action) => {
            state.loading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            console.log({action})
            state.loading = false;
            const {
                arg: { id },
            } = action.meta;
            if (id) {
                state.allUsers = state.allUsers.map((item) =>
                    item.id === id ? action.payload : item
                );
            }
        },
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
})

export const { create, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer