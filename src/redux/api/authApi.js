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

        getAllUsersAdmin: builder.query({
            query: (params) => {
                return {
                    url: `/users`,
                    method: "GET",
                    params
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
        }),

        updateSingleUser: builder.mutation({
            query: ({ id, data }) => ({
                url: `/users/${id}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: [tagTypes.USER],
        })
    })
})

export const {
    useGetSingleUserAndRoleQuery,
    useGetAllUsersAdminQuery,
    useRegisterUserMutation,
    useUpdateSingleUserMutation,
} = authApi;