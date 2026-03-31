import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const EnrolledCourseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // 🔥 ENROLL COURSE
        enrollCourse: builder.mutation({
            query: (data) => ({
                url: `/enroll`,
                method: "POST",
                body: data,
            }),
            providesTags: [tagTypes.COURSE],
        }),

        // 🔥 GET MY ENROLLED COURSES
        getMyEnrollCourses: builder.query({
            query: (email) => ({
                url: `/my-enroll-course`,
                method: "GET",
                params: { email },
            }),
            providesTags: [tagTypes.COURSE],
        }),

        // 🔥 GET SINGLE ENROLLED COURSE
        getMySingleCourse: builder.query({
            query: ({ id, email }) => ({
                url: `/my-enroll-single-course/${id}`,
                method: "GET",
                params: { email },
            }),
            providesTags: [tagTypes.COURSE],
        }),

    })
});

export const {

    useEnrollCourseMutation,
    useGetMyEnrollCoursesQuery,
    useGetMySingleCourseQuery,

} = EnrolledCourseApi;