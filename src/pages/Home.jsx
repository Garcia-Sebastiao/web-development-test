import LinkButton from "../components/common/LinkButton";
import { illustration } from "../assets";

export default function Home() {
  return (
    <div className="w-full h-screen relative bg-cover">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <header className="w-full flex p-10 z-50 items-center justify-between">
        <h1 className="text-2xl z-10 font-poppinsBold">Booklet.com</h1>

        <ul className="flex items-center gap-4 z-10">
          <li>
            <LinkButton
              href={"/auth/sign_in"}
              value="Login"
              className="bg-pink-500"
            />
          </li>
          <li>
            <LinkButton
              href={"/auth/sign_up"}
              value="Cadastrar-se"
              className="bg-blue-700"
            />
          </li>
        </ul>
      </header>

      <section className="w-full px-20 py-32 items-center flex justify-between">
        <div className="flex flex-col gap-6 z-10 items-start">
          <h2 className="text-6xl font-poppinsBold">
            Seja bem vindo a Booklet
          </h2>

          <span className="max-w-3xl leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero
            doloribus alias maiores est laborum nesciunt laboriosam aliquid
            culpa. Delectus soluta optio natus dicta assumenda ad corrupti sit
            voluptatem incidunt.
          </span>

          <LinkButton
            href={"/auth/sign_in"}
            value="Get Started"
            className="bg-pink-500 px-10 py-4"
          />
        </div>

        <div>
          <img src={illustration} className="w-[36rem]" alt="" />
        </div>
      </section>
      <div className="w-96 h-96 rounded-full bg-blue-400 blur-[140px] absolute bottom-10 right-10"></div>
    </div>
  );
}
