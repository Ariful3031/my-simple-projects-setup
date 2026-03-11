import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const categoriesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategoriesList: builder.query({
            query: (params) => {
                return {
                    url: `/categories`,
                    method: "GET",
                    params: params || {}
                }
            },
            providesTags: [tagTypes.CATEGORY],
        }),
        createCategory: builder.mutation({
            query: (formData) => ({
                url: "/category",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: [tagTypes.CATEGORY],
        }),
        updateSingleCategory: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/category/${id}`,
                method: "PATCH",
                body: formData,
            }),
            invalidatesTags: [tagTypes.CATEGORY],
        }),
    })
})

export const {
    useGetAllCategoriesListQuery,
    useCreateCategoryMutation,
    useUpdateSingleCategoryMutation,
} = categoriesApi;