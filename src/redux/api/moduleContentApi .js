import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const moduleContentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // ======================
        // 📦 MODULE
        // ======================

        // Create Module
        createModule: builder.mutation({
            query: (data) => ({
                url: "/modules",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.MODULE],
        }),

        // Get Modules by Course
        getModulesByCourse: builder.query({
            query: (courseId) => ({
                url: `/courses/${courseId}/modules`,
                method: "GET",
            }),
            providesTags: [tagTypes.MODULE],
        }),

        // Update Module
        updateModule: builder.mutation({
            query: ({ id, data }) => ({
                url: `/modules/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: [tagTypes.MODULE],
        }),

        // Delete Module
        deleteModule: builder.mutation({
            query: (id) => ({
                url: `/modules/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.MODULE],
        }),

        // ======================
        // 📚 CONTENT
        // ======================

        // Create Content
        createContent: builder.mutation({
            query: (data) => ({
                url: "/contents",
                method: "POST",
                body: data,
            }),
            invalidatesTags: [tagTypes.CONTENT],
        }),

        // Get Contents by Module
        getContentsByModule: builder.query({
            query: (moduleId) => ({
                url: `/modules/${moduleId}/contents`,
                method: "GET",
            }),
            providesTags: [tagTypes.CONTENT],
        }),

        // Update Content
        updateContent: builder.mutation({
            query: ({ id, data }) => ({
                url: `/contents/${id}`,
                method: "PATCH",
                body: data,
            }),
            invalidatesTags: [tagTypes.CONTENT],
        }),

        // Delete Content
        deleteContent: builder.mutation({
            query: (id) => ({
                url: `/contents/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [tagTypes.CONTENT],
        }),

    }),
});

export const {
    useCreateModuleMutation,
    useGetModulesByCourseQuery,
    useUpdateModuleMutation,
    useDeleteModuleMutation,

    useCreateContentMutation,
    useGetContentsByModuleQuery,
    useUpdateContentMutation,
    useDeleteContentMutation,

} = moduleContentApi;