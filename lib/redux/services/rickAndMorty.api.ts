import { api } from "../api";

export const rickAndMortyApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCharacters: builder.mutation<any, any>({
      query: ({ name }) => {
        let url = "character/";
        if (name) {
          url += `?name=${name}`;
        }
        return {
          url: url,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCharactersMutation } = rickAndMortyApi;

export default rickAndMortyApi;
