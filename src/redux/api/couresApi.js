import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const courseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCourseList: builder.query({
            query: (params) => {
                return {
                    url: `/courses`,
                    method: "GET",
                    params: params || {}
                }
            },
            providesTags: [tagTypes.COURSE],
        })
    })
})

export const {
    useGetCourseListQuery,
} = courseApi;