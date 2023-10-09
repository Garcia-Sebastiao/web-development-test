import instance from "../../configAxios";

export default async function getAuthorBooks(id) {
  return await instance.get(`/books/get_user_books/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
