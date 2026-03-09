import { baseApi } from "../baseApi";
import { tagTypes } from "../tagTypes";

export const categoriesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategoriesList: builder.query({
            query: (params) => {
                return {
                    url: `/categories`,
                    method: "GET",
                    params: params
                }
            },
            providesTags: [tagTypes.CATEGORY],
        }),
        createCategories: builder.mutation({
            query: (formData) => ({
                url: "/categories",
                method: "POST",
                body: formData,
            }),
            invalidatesTags: [tagTypes.CATEGORY],
        }),
        updateSingleCategorie: builder.mutation({
            query: ({ id, formData }) => ({
                url: `/categories/${id}`,
                method: "PATCH",
                body: formData,
            }),
            invalidatesTags: [tagTypes.CATEGORY],
        }),
    })
})

export const {
    useGetAllCategoriesListQuery,
    useCreateCategoriesMutation,
    useUpdateSingleCategorieMutation,
} = categoriesApi;