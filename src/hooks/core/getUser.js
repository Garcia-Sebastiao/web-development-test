import instance from "../configAxios";

export default async function getUser(id) {
  return await instance.get(`/auth/get_user/${id}`);
}
