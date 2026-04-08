import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "./tagTypes";

export const baseApi=createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SERVER_SIDE_APPI,

    }),

    tagTypes: tagTypeList,
    endpoints:()=>({}),
})