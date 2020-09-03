import axios from "axios";

const api = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://book.interpark.com/api/",
  params: {
    key: "F026AED7229720A43B7C765E6AD84FC47C584173CED33CA20381913E55BE0250",
    output: "json",
  },
});

export const interparkApi = {
  bestSeller: () =>
    api.get("bestSeller.api", {
      params: {
        categoryId: "100",
      },
    }),
  recommend: () =>
    api.get("recommend.api", {
      params: {
        categoryId: "100",
      },
    }),
  new: () =>
    api.get("newBook.api", {
      params: {
        categoryId: "100",
      },
    }),
  search: (term) =>
    api.get("search.api", {
      params: {
        query: term,
      },
    }),
};
