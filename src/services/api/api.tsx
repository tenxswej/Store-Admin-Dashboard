// This file needs to be fixed
import { createApi, fetchBaseQuery, FetchArgs,BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../auth/authSlice";
import { baseUrl } from "./baseUrl";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",

  /**
   * **use the second one**
   */
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;

    
    const token = state.auth.token;
    
    console.log("check header token ->>>>", token)
    if (token) {
      /**
       * Be careful here It might be different by how you've set the
       * response headers in the backend code
       * backend code location -> file name : "jwtValidator.js" line : 21
       */
      headers.set("authentication", `Bearer ${token}`);
      // headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const reAuthBaseQuery: BaseQueryFn= async (
  args : FetchArgs,
  api,
  extraOptions
) => {
  let res = await baseQuery(args, api, extraOptions);

  console.log("Re auth base query", res)

  /**
   * This query will re re-authenticate the user when the current access token is expired by sending cookies to the server
   * Be careful here as well what **status** your backend api sends you
   * when trying to access with an expired token
   * backend code location -> file name : "jwtValidator.js" line : 23
   */

  if (res?.meta?.response.status === 401) {
    const reAuthRes = await baseQuery("/auth/reauth", api, extraOptions);


    console.log("Asking for re auth token")

    if (reAuthRes?.data) {
      const userCredentials = (api.getState() as RootState).auth;

      api.dispatch(setCredentials({ ...reAuthRes.data, userCredentials }));

      res = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  console.log("res",res)

  return res;
};

const apiSlice = createApi({
  baseQuery: reAuthBaseQuery,
  endpoints: () => ({}),
});

export default apiSlice;
