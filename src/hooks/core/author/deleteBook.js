import instance from "../../configAxios";

export default async function deleteBook(id) {
  return await instance.delete(`/books/delete_book/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
