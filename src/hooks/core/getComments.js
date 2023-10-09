import instance from "../configAxios";

export default async function getComments(id) {
  return await instance.get(`/comment/get_book_comments/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
