import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../Api';
export const createactor = createAsyncThunk(
    "actor/create",
    async (param, { rejectWithValue }) => {
        try {
            const response = await api.post("actors", param);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const getallactors = createAsyncThunk(
    "actors/all",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("actors/all");
            console.log("getall---->", response.data)
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
export const updateactor = createAsyncThunk(
    "actor/update",
    async ({ id, rModel }) => {
        try {
            const response = await api.put(`actors/${id}`, rModel);
            console.log(response);
            return response.data;
        } catch (err) {
            return console.log(err.response.data);
        }
    }
);
export const deleteactor = createAsyncThunk(
    "actor/delete",
    async (id)=>{
        try{
            const response = await api.delete(`actors/${id}`);
            return response.data;
        }catch(err){
           return console.log(err);
        }
    }
)

const initialState = {
    actor :[],
    allactors : [],
    loading: false,
    error:''
}

export const userSlice = createSlice({
    name : 'actor',
    initialState,
    reducers:{},
    extraReducers:{
        [createactor.pending]: (state, { meta, payload }) => {
            state.loading = true;
        },
        [createactor.fulfilled]: (state, { meta, payload }) => {
            state.loading = false;
            state.actor = payload
        },
        [createactor.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [getallactors.pending]: (state, action) => {
            state.loading = true;
        },
        [getallactors.fulfilled]: (state, action) => {
            state.loading = false;
            state.allactors = action.payload;
        },
        [getallactors.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },
        [updateactor.pending]: (state, action) => {
            state.loading = true;
        },
        [updateactor.fulfilled]: (state, action) => {
            state.loading = false;
            state.actor = action.payload;
        },
        [updateactor.rejected]: (state, action) =>{
            state.loading = false;
            state.error = action.payload.message;
        },
        [deleteactor.fulfilled]: (state, action) => {
            state.loading = false;
            state.actor = action.payload;
        },
        [deleteactor.rejected]: (state, action) => {
            state.loading= false;
            state.error = action.payload.message;
        },
    },
})
export default userSlice.reducer;