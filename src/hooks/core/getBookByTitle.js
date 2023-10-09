import instance from "../configAxios";

export default async function getBookByTitle(query) {
  return await instance.get(`/books/search_books?keyword=${query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
