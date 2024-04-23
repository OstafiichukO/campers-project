import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LIMIT } from "assets/constants";

export const vehiclesApi = createApi({
  reducerPath: "vehiclesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://65f75aa5b4f842e80885875b.mockapi.io/api",
  }),

  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => {
        return '/vehicles';
      },
      transformResponse: (response) => {
        let params = new URLSearchParams(document.location.search);
        const page = Number(params.get("page") || 1);
        const limit = Number(params.get("limit") || LIMIT);

        const filters = {};
        for (const [key, value] of params.entries()) {
          if (key !== 'page' && key !== 'limit') {
            filters[key] = value;
          }
        }

        const filteredResults = response.filter(vehicle => {
          return Object.entries(filters).every(([key, value]) => {
            if (key === "TV" ||
              key === "airConditioner" ||
              key === "bathroom" ||
              key === "kitchen") {
              return vehicle.details[key] === parseInt(value);
            }
            return vehicle[key] === value;
          });
        });

        const totalResults = filteredResults.length;

        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;

        const paginatedResults = filteredResults.slice(startIndex, endIndex);

        return {
          vehicles: paginatedResults,
          total: totalResults
        };
      }
    }),
    getVehicleById: builder.query({
      query: (id) => `/vehicles/${id}`,
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehicleByIdQuery,
} = vehiclesApi;
