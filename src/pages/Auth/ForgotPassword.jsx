import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const redirect = useNavigate();

  return (
    <div className="w-full h-screen relative bg-cover">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>

      <div className="absolute bottom-10 left-10 flex flex-col gap-2">
        <h1 className="text-2xl font-poppinsBold">Booklet.com</h1>
        <span className="text-sm">All Rights Reserved to Mirantes.IO</span>
      </div>

      <div className="w-full h-full flex items-center justify-center z-10">
        <div className="bg-[#00000020] backdrop-blur-md w-3/12 border-[#ffffff20] border-2 shadow-lg rounded-md p-10 flex flex-col gap-6 pb-16">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-poppinsSemiBold">Forgot Password</h2>
            <span>
              Caso seu email esteja registrado, você receberá um link de
              restaurção.
            </span>
          </div>

          <form
            autoComplete="off"
            className="w-full flex flex-col gap-4"
            action=""
          >
            <Input placeholder="Digite seu email" type="email" />

            <Button onClick={() => redirect("/auth/inbox_message")} value="Set Code" className="bg-pink-500 mt-2" />
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
