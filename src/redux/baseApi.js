import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "./tagTypes";

export const baseApi=createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://simple-react-project-setup-server.vercel.app/api",
        baseUrl: import.meta.env.VITE_SERVER_SIDE_APP,
    }),

    tagTypes: tagTypeList,
    endpoints:()=>({}),
})