import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

export const getAllRoomsApi = createApi({
  reducerPath: "getAllRoomsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getAllRooms: builder.query({
      query: () => {
        let url = "http://localhost:5000/room/getAllRooms";
        
        return {
          url: url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllRoomsQuery } = getAllRoomsApi;
