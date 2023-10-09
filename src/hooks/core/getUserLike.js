import instance from "../configAxios";

export default async function getUserLike(userId, bookId) {
  return await instance.get(`likes/get_user_like/${userId}/${bookId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
