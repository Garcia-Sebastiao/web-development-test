import instance from "../configAxios";

export default async function accountLogin(data) {
  return await instance.post("/auth/login", data);
}
