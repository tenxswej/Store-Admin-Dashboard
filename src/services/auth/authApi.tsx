import apiSlice from "../api/api";

interface ICredentials {
  name: string;
  password: string;
  email: string;
}

interface ICredentialsReturn {
  token: string;
  name: string;
  roles: number[];
}

const authApiExtend = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ICredentials, ICredentialsReturn>({
      query: (credentials: ICredentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiExtend;
