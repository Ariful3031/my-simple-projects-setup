import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "./tagTypes";

export const baseApi=createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000",
    }),

    tagTypes: tagTypeList,
    endpoints:()=>({}),
})