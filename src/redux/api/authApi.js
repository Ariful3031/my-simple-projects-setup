import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserRole: builder.query({
            query: (email) => {
                return {
                    url: `/users/${email}/role`,
                    method: "GET",
                    // params: params || {}
                }
            },
            providesTags: [tagTypes.USER],
        }),
        registerUser: builder.mutation({
            query: (userInfo) => ({
                url: `/users`,
                method: "POST",
                body: userInfo
            }),
            providesTags: [tagTypes.USER],
        })

    })
})

export const {
    usegetUserRoleQuery,
    useRegisterUserMutation,
} = authApi;