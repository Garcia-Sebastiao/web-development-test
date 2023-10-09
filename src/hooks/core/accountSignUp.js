import instance from "../configAxios";

export default async function accountSignUp(data) {
  return await instance.post("/auth/signup", data);
}
