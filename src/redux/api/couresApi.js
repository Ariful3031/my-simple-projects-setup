
import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const courseApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // -------------------- COURSES --------------------
        getCourseList: builder.query({
            query: (params) => ({
                url: "/courses",
                method: "GET",
                params: params || {},
            }),
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

        updateSingleCourse: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/courses/${id}`,
                method: "PATCH",
                body: formData,
            }),
            invalidatesTags: [tagTypes.COURSE],
        }),

        updateCourseOutline: builder.mutation({
            query: ({ courseId, topics }) => ({
                url: `/courses/update-outline/${courseId}`,
                method: "PATCH",
                body: { topics },
            }),
            invalidatesTags: [tagTypes.COURSE],
        }),

        // -------------------- MODULES --------------------
        getSingleCourseTopic: builder.query({
            query: ({ courseId, mode }) => ({
                url: `/courses/${courseId}/modules`,
                method: "GET",
                params: { type: mode },
            }),
            providesTags: ["Modules"],
        }),

        getModuleContents: builder.query({
            query: (moduleId) => `/modules/${moduleId}/contents`,
            providesTags: ["ModuleContents"],
        }),

        getSingleModuleContents: builder.query({
            query: (contentId) => `/contents/${contentId}`,
            providesTags: ["ModuleContents"],
        }),

        updateModule: builder.mutation({
            query: ({ id, data }) => ({
                url: `/modules/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: ["Modules", "ModuleContents"],
        }),

        deleteModule: builder.mutation({
            query: ({ courseId, moduleId }) => ({
                url: `/courses/${courseId}/delete-module/${moduleId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Modules", "ModuleContents"],
        }),

        // -------------------- CONTENT --------------------
        addContentToCoursePost: builder.mutation({
            query: ({ courseId, topic, contentName, contentLink, type }) => ({
                url: `/courses/${courseId}/add-content`,
                method: "POST",
                body: { topic, title: contentName, link: contentLink, type },
            }),
            invalidatesTags: ["ModuleContents"],
        }),

        // updateContent: builder.mutation({
        //     query: ({ courseId, contentId, data }) => ({
        //         url: `/courses/${courseId}/update-content/${contentId}`,
        //         method: "PATCH",
        //         body: data,
        //     }),
        //     invalidatesTags: ["ModuleContents"],
        // }),

        updateContent: builder.mutation({
            query: ({ courseId, moduleIndex, subIndex, data }) => ({
                url: `/courses/update-content`,
                method: "PATCH",
                body: { courseId, moduleIndex, subIndex, data },
            }),
            invalidatesTags: [tagTypes.COURSE],
        }),

        deleteContent: builder.mutation({
            query: ({ courseId, contentId }) => ({
                url: `/courses/${courseId}/delete-content/${contentId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ModuleContents"],
        }),
    }),
});

export const {
    // COURSES
    useGetCourseListQuery,
    useCreateCourseMutation,
    useUpdateSingleCourseMutation,
    useUpdateCourseOutlineMutation,

    // MODULES
    useGetSingleCourseTopicQuery,
    useGetModuleContentsQuery,
    useGetSingleModuleContentsQuery,
    useUpdateModuleMutation,
    useDeleteModuleMutation,

    // CONTENT
    useAddContentToCoursePostMutation,
    useUpdateContentMutation,
    useDeleteContentMutation,
} = courseApi;


// import { baseApi } from "../baseApi";
// import { tagTypes } from "../tagTypes";

// export const courseApi = baseApi.injectEndpoints({
//     endpoints: (builder) => ({
//         getCourseList: builder.query({
//             query: (params) => {
//                 return {
//                     url: `/courses`,
//                     method: "GET",
//                     params: params || {}
//                 }
//             },
//             providesTags: [tagTypes.COURSE],
//         }),
//         createCourse: builder.mutation({
//             query: (formData) => ({
//                 url: "/courses",
//                 method: "POST",
//                 body: formData,
//             }),
//             invalidatesTags: [tagTypes.COURSE],
//         }),


//         updateSingleCourse: builder.mutation({
//             query: ({ id, formData }) => ({
//                 url: `/courses/${id}`,
//                 method: "PATCH",
//                 body: formData,
//             }),
//             invalidatesTags: [tagTypes.COURSE],
//         }),

//         addContentToCourse: builder.mutation({
//             query: (data) => ({
//                 url: "/courses/add-content",
//                 method: "PATCH",
//                 body: data,
//             }),
//             invalidatesTags: [tagTypes.COURSE],
//         }),
//         updateCourseOutline: builder.mutation({
//             query: ({ courseId, topics }) => ({
//                 url: `courses/update-outline/${courseId}`,
//                 method: "PATCH",
//                 body: { topics },
//             }),
//             invalidatesTags: [tagTypes.COURSE],
//         }),


//         addContentToCourse: builder.mutation({
//             query: ({ courseId, topic, contentName, contentLink, type }) => ({
//                 url: `/courses/${courseId}/add-content`,
//                 method: "POST",
//                 body: { topic, title: contentName, link: contentLink, type },
//             }),
//             invalidatesTags: ["Courses"],
//         }),

//         updateContent: builder.mutation({
//             query: ({ courseId, contentId, data }) => ({
//                 url: `/courses/${courseId}/update-content/${contentId}`,
//                 method: "PATCH",
//                 body: data,
//             }),
//             invalidatesTags: ["Courses"],
//         }),

//         deleteContent: builder.mutation({
//             query: ({ courseId, contentId }) => ({
//                 url: `/courses/${courseId}/delete-content/${contentId}`,
//                 method: "DELETE",
//             }),
//             invalidatesTags: ["Courses"],
//         }),
//     })
// })

// export const {
//     useGetCourseListQuery,
//     useCreateCourseMutation,
//     useUpdateSingleCourseMutation,
//     // useAddContentToCourseMutation,
//     useUpdateCourseOutlineMutation,
//     useAddContentToCourseMutation,
//     useUpdateContentMutation,
//     useDeleteContentMutation,
// } = courseApi;

