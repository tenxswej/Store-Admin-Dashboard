import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  name: string | null;
  roles: number[] | null;
  token: string | null;
}

interface IAuthPayload {
  name: string | null;
  roles: number[];
  token: string;
}

const initialState: IInitialState = { name: null, roles: null, token: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthPayload>) => {
      const { token, name, roles } = action.payload;

      state.name = name;
      state.roles = roles;
      state.token = token;
    },

    logout: (state) => {
      state.name = null;
      state.roles = null;
      state.token = null; 
    },
  },
});

export const {logout,setCredentials} = authSlice.actions

export default authSlice.reducer;
