import instance from "../configAxios";

export default async function deleteLike(userId, bookId) {
  return await instance.delete(`/likes/delete_like/${userId}/${bookId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
