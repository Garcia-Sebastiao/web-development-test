import instance from "../configAxios";

export default async function getBook(id) {
  return await instance.get(`/books/get_book/${id}`);
}
