import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { Link } from "react-router-dom";

// HOOKS
import { useState } from "react";
import { useForm } from "react-hook-form";
import useHttp from "../../hooks/useHttp";
import useJWT from "../../hooks/useJWT";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ErrorModal from "../../components/common/Modals/ErrorModal";

export default function SignIn() {
  const [formData, setFormData] = useState([]);
  const { handleSubmit } = useForm();
  const { login } = useHttp();
  const { decode } = useJWT();
  const { signIn, token } = useAuth();
  const navigate = useNavigate();
  const [errorModal, setErrorModal] = useState({
    error: false,
    message: "",
    description: "",
  });

  function handleOnChange(e) {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleOnSubmit() {
    const data = {
      email: formData.email,
      password: formData.password,
    };

    try {
      await login(data).then((resp) => {
        signIn(resp.data.token, resp.data.roleToken);
        navigate("/system/main/");
        console.log(resp);

        if (resp.status != 201) {
          setErrorModal({
            error: true,
            message: "Acesso Negado!",
            description: "Usuário ou senha inválidos.",
          });
          console.log(errorModal);
        }
      });
    } catch {
      setErrorModal({
        error: true,
        message: "Acesso Negado!",
        description: "Usuário ou senha inválidos",
      });
    }
  }

  return (
    <div className="w-full h-screen relative bg-cover">
      <ErrorModal
        isOpen={errorModal.error}
        onClick={() => setErrorModal({ error: false, message: "" })}
        message={errorModal.message}
        description={errorModal.description}
      />
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>

      <div className="absolute bottom-10 left-10 flex flex-col gap-2">
        <Link to='/' className="text-2xl font-poppinsBold">Booklet.com</Link>
        <span className="text-sm">All Rights Reserved to Mirantes.IO</span>
      </div>

      <div className="w-full h-full flex items-center justify-center z-10">
        <div className="bg-[#00000020] backdrop-blur-md w-3/12 border-[#ffffff20] border-2 shadow-lg rounded-md p-10 flex flex-col gap-6 pb-16">
          <h2 className="text-2xl font-poppinsSemiBold">Sign In</h2>
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            autoComplete="off"
            method="POST"
            className="w-full flex flex-col gap-4"
          >
            <Input
              name="email"
              onChange={handleOnChange}
              placeholder="Digite seu email"
              type="email"
            />
            <Input
              name="password"
              onChange={handleOnChange}
              placeholder="Digite sua senha"
              type="password"
            />

            <Link
              to="/auth/forgot_password"
              className="font-poppinsMedium text-right"
            >
              Esqueceu sua senha?
            </Link>

            <Button type="submit" value="Sign in" className="bg-pink-500" />
          </form>
          <span>
            Dont have an account?{" "}
            <Link to="/auth/sign_up" className="font-poppinsMedium">
              Sign up
            </Link>{" "}
            for access.
          </span>
        </div>
      </div>

      <div className="w-96 h-96 rounded-full bg-blue-400 blur-[140px] absolute bottom-10 right-10"></div>
    </div>
  );
}
