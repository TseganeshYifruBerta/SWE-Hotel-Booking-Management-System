import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

export const getRoomDetailByIdApi = createApi({
  reducerPath: "getRoomDetailByIdApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getRoomDetailById: builder.query({
      query: (params) => {
        const { userId } = params;
        let url = "http://localhost:5000/question/getAllQuestionsById";
        console.log(params);
        const queryParams = [];
        queryParams.push(`${userId}`);
        return {
          url: queryParams.length > 0 ? `${url}/${queryParams.join("/")}` : url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetRoomDetailByIdQuery } = getRoomDetailByIdApi;
