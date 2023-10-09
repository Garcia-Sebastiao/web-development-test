import ErrorModal from "../../../components/common/Modals/ErrorModal";
import Header from "../../../components/layout/Header";
import Navbar from "../../../components/layout/Navbar";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import useHttp from "../../../hooks/useHttp";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useJWT from "../../../hooks/useJWT";

export default function AddBook() {
  const { postBook, viewUser } = useHttp();
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState([]);
  const [modal, setModal] = useState(false);
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { decode } = useJWT();
  const [user, setUser] = useState();
  const user_id = decode(localStorage.getItem("access_token"));

  function handleOnChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    viewUser(user_id?.id).then((resp) => {
      setUser(resp.data);
    });
  }, []);

  async function handlePostBook() {
    const data = {
      title: formData.title,
      category: formData.category || "Aventura",
      author: user?.name,
      price: Number(formData.price),
      description: formData.description,
    };
    setLoading(true);
    try {
      await postBook(data)
        .then((resp) => {
          setModal(true);
          setState("success");
        })
        .finally(() => {
          setLoading(false);
        });
    } catch {
      setLoading(false);
      setModal(true);
      setState("error");
    }
  }
  return (
    <div className="w-full h-screen relative bg-cover overflow-x-hidden">
      <ErrorModal
        isOpen={modal}
        onClick={() => {
          setModal(false);
          navigate("/system/profile/author_profile");
        }}
        message={
          state === "success"
            ? "Livro adicionado com sucesso"
            : "Falha ao adicionar livro"
        }
        description={
          state === "success"
            ? "Seu livro foi adicionado com sucesso"
            : "Sua postagem falhou, por favor tente mais tarde."
        }
      />

      <ErrorModal
        isOpen={loading}
        message="Aguarde um momento..."
        description="Sua postagem está a ser realizada."
      />

      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <div className="w-64 h-64 rounded-full bg-blue-700 blur-[140px] absolute z-[1] bottom-10 right-10"></div>

      <div className="h-full w-full p-10 flex gap-12">
        <Navbar active="books" />

        <main className="w-[83%] h-full z-10 flex flex-col gap-12 overflow-x-hidden pr-5">
          <Header />

          <div className="w-full h-full flex flex-col gap-14 pr-5 overflow-y-auto overflow-x-hidden  scrollbar">
            <div className="flex gap-4 flex-col">
              <h2 className="font-poppinsBold text-2xl">Postar Livro</h2>

              <span className="xs:text-sm xl:text-base">
                Preenha os campos abaixo, para postar o seu livro na prataforma.
              </span>
            </div>

            <form
              onSubmit={handleSubmit(handlePostBook)}
              className="w-full items-end flex flex-col gap-4 p-10 rounded-xl bg-variant-2 border-2 border-[#ffffff20]"
            >
              <div className="flex w-full items-center gap-3">
                <Input
                  type="text"
                  name="title"
                  onChange={handleOnChange}
                  placeholder="Digite um titulo para o livro"
                />
              </div>

              <div className="flex w-full items-center gap-3">
                <Input
                  type="number"
                  name="price"
                  onChange={handleOnChange}
                  placeholder="Digite um preço para o livro"
                />
                <select
                  name="category"
                  onChange={handleOnChange}
                  className="w-full p-4 rounded-md bg-variant-1 outline-none"
                  id=""
                >
                  <option className="text-gray-700" value="Aventura">
                    Aventura
                  </option>
                  <option className="text-gray-700" value="Romance">
                    Romance
                  </option>
                  <option className="text-gray-700" value="Classics">
                    Clássicos
                  </option>
                </select>
              </div>

              <div className="w-full">
                <textarea
                  name="description"
                  onChange={handleOnChange}
                  className="w-full p-4 rounded-md bg-variant-1 outline-none scrollbar min-h-[120px]  max-h-40"
                  placeholder="Digite uma breve descrição do livro."
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <Button
                type="submit"
                value="Postar"
                className="px-24 bg-pink-500"
              />
            </form>
          </div>
        </main>
      </div>

      <div className="w-72 h-72 opacity-40 rounded-full bg-blue-400 blur-[140px] absolute top-10 right-10 z-[1]"></div>
      <div className="w-24 h-24 rounded-full bg-blue-400 blur-[100px] opacity-50 absolute top-96 left-[50%] z-[1]"></div>
    </div>
  );
}
