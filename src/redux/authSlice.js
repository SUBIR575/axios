import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../Api";
const initialState = {
  profile: [],
  token: "",
  loading: false,
  error: "",
};
export const signin = createAsyncThunk(
  "signin",
  async (param, { rejectWithValue }) => {
    try {
      const response = await api.post("login", param);
      console.log("res---->", response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const signup = createAsyncThunk(
  "signup",
  async (param, { rejectWithValue }) => {
    try {
      const response = await api.post("signup", param);
      return response;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [signup.fulfilled]: (state, { payload: { error, token, profile } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.token = token;
        localStorage.setItem("token", token);
      }
    },
    [signup.pending]: (state, action) => {
      state.loading = true;
    },
    [signin.pending]: (state, action) => {
      state.loading = true;
    },
    [signin.fulfilled]: (state, action) => {
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.token = action.payload.token;
        state.profile = action.payload;
        localStorage.setItem("token", action.payload.token);
      }
    },
  },
});

export const { addToken, logout } = authReducer.actions;
export default authReducer.reducer;
