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
        }),
        createCourse: builder.mutation({
            query: (formData) => ({
                url: "/courses",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: [tagTypes.COURSE],
        }),
    })
})

export const {
    useGetCourseListQuery,
    useCreateCourseMutation,
} = courseApi;