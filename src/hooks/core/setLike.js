import instance from "../configAxios";

export default async function setLike(data) {
  return await instance.post("/likes/like_book", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
