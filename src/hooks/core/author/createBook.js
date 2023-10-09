import instance from "../../configAxios";

export default async function createBook(data) {
  return await instance.post("/books/create_book", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
