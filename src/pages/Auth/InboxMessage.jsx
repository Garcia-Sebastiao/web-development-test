import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

import { Link } from "react-router-dom";
import { inboxIcon } from "../../assets";
import LinkButton from "../../components/common/LinkButton";

export default function InboxMessage() {
  return (
    <div className="w-full h-screen relative bg-cover">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>

      <div className="absolute bottom-10 left-10 flex flex-col gap-2">
        <h1 className="text-2xl font-poppinsBold">Booklet.com</h1>
        <span className="text-sm">All Rights Reserved to Mirantes.IO</span>
      </div>

      <div className="w-full h-full flex items-center justify-center z-10">
        <div className="bg-[#00000020] backdrop-blur-md w-3/12 border-[#ffffff20] border-2 shadow-lg rounded-md p-12 flex flex-col items-center gap-6 pb-16">
          <div>
            <img src={inboxIcon} alt="" />
          </div>

          <h2 className="text-2xl font-poppinsSemiBold text-center text-white">
            Link de restauração enviado!
          </h2>
          <span className="text-center">
            Foi enviado um link de restauração de senha no seu email. Verifique
            sua caixa de entrada.
          </span>

          <LinkButton className="bg-pink-500 w-full text-center" href="/auth/sign_in" value="Voltar para login" />
        </div>
      </div>

      <div className="w-96 h-96 rounded-full bg-blue-400 blur-[140px] absolute bottom-10 right-10"></div>
    </div>
  );
}
