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
        const { roomId } = params;
        let url = "http://localhost:5000/room/getRoomById";
        console.log(params);
        const queryParams = [];
        queryParams.push(`${roomId}`);
        return {
          url: queryParams.length > 0 ? `${url}/${queryParams.join("/")}` : url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetRoomDetailByIdQuery } = getRoomDetailByIdApi;
