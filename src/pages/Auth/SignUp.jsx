import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { useState } from "react";
import useHttp from "../../hooks/useHttp";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

export default function SignIUp() {
  const [formData, setFormData] = useState([]);
  const { handleSubmit } = useForm();
  const { signIn } = useAuth();
  const { createAccount } = useHttp();
  const navigate = useNavigate();

  function handleOnChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleOnSubmit() {
    const data = {
      full_name: formData.full_name,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role || "Usuario",
    };

    console.log(data);

    await createAccount(data).then((resp) => {
      signIn(resp.data.token, resp.data.roleToken);
      navigate("/system/main/");
    });
  }

  return (
    <div className="w-full h-screen relative bg-cover">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>

      <div className="absolute bottom-10 left-10 flex flex-col gap-2">
        <Link to="/" className="text-2xl font-poppinsBold">Booklet.com</Link>
        <span className="text-sm">All Rights Reserved to Mirantes.IO</span>
      </div>

      <div className="w-full h-full flex items-center justify-center z-10">
        <div className="bg-[#00000020] backdrop-blur-md w-2/5 border-[#ffffff20] border-2 shadow-lg rounded-md p-10 flex flex-col gap-6 pb-16">
          <h2 className="text-2xl font-poppinsSemiBold">Register</h2>

          <form
            autoComplete="off"
            className="w-full flex flex-col gap-4"
            onSubmit={handleSubmit(handleOnSubmit)}
          >
            <div className="flex items-center w-full gap-3">
              <Input
                name="full_name"
                onChange={handleOnChange}
                placeholder="Digite seu nome completo"
                type="text"
              />
              <Input
                name="name"
                onChange={handleOnChange}
                placeholder="Digite seu de usuário"
                type="text"
              />
            </div>
            <div className="flex items-center w-full gap-3">
              <Input
                name="email"
                onChange={handleOnChange}
                placeholder="Digite seu email"
                type="email"
              />
            </div>

            <div className="flex items-center w-full gap-3">
              <Input
                name="password"
                onChange={handleOnChange}
                placeholder="Digite sua senha"
                type="password"
              />
              <Input
                name="conf_password"
                onChange={handleOnChange}
                placeholder="Confirme sua senha"
                type="password"
              />
            </div>

            <div className="flex items-center w-full gap-3">
              <select
                name="role"
                onChange={handleOnChange}
                className="w-full p-4 rounded-md bg-variant-1 outline-none"
                id=""
              >
                <option className="text-gray-700" value="Usuario">
                  Usuário
                </option>
                <option className="text-gray-700" value="Loja">
                  Loja
                </option>
                <option className="text-gray-700" value="Escritor">
                  Escritor
                </option>
              </select>
            </div>

            <Button
              type="submit"
              value="Sign in"
              className="bg-pink-500 mt-2"
            />
          </form>
          <span>
            Already have an account?{" "}
            <Link to="/auth/sign_in" className="font-poppinsMedium">
              Sign in
            </Link>{" "}
            for access.
          </span>
        </div>
      </div>

      <div className="w-96 h-96 rounded-full bg-blue-400 blur-[140px] absolute bottom-10 right-10"></div>
    </div>
  );
}
