import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "./tagTypes";

export const baseApi=createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        // baseUrl: "https://simple-react-project-setup-server.vercel.app/api",

        // VITE_SERVER_SIDE_APP= http://localhost:3000
        baseUrl: "http://localhost:3000",
    }),

    tagTypes: tagTypeList,
    endpoints:()=>({}),
})