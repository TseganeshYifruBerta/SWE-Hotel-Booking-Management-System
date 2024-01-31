import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

export const getAllPaymentsApi = createApi({
  reducerPath: "getAllPaymentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  endpoints: (builder) => ({
    getAllPayments: builder.query({
      query: () => {
        let url = "http://localhost:5000/payment/getPayments";

        return {
          url: url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllPaymentsQuery } = getAllPaymentsApi;
