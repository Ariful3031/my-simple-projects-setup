import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleUserAndRole: builder.query({
            query: ({ email, fields }) => {
                return {
                    url: `/users/${email}`,
                    method: "GET",
                    params: fields ? { fields } : {}
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
    useGetSingleUserAndRoleQuery,
    useRegisterUserMutation,
} = authApi;