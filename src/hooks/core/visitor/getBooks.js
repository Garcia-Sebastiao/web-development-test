import instance from "../../configAxios";

async function getBooks() {
  const response = await instance.get("/books");
  return response;
}

export default getBooks;