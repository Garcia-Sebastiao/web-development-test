import instance from "../configAxios";

export default async function getLikes(id) {
  return await instance.get(`likes/get_likes/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
