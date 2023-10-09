import instance from "../../configAxios";

export default async function updateBook(id, data) {
  return await instance.put(`/books/update_book/${id}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
