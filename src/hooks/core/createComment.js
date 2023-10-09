import instance from "../configAxios";

export default async function createComment(data) {
  return await instance.post("/comment/create_comment", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
}
