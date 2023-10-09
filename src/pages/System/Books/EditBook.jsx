import ErrorModal from "../../../components/common/Modals/ErrorModal";
import Header from "../../../components/layout/Header";
import Navbar from "../../../components/layout/Navbar";
import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";
import useHttp from "../../../hooks/useHttp";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useJWT from "../../../hooks/useJWT";

export default function EditBook() {
  const { handleSubmit } = useForm();
  const [formData, setFormData] = useState([]);
  const param = useParams();
  const { viewBook, editBook, viewUser } = useHttp();
  const [book, setBook] = useState();
  const { book_id } = param;
  const [modal, setModal] = useState(false);
  const [state, setState] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const { decode } = useJWT();
  const user_id = decode(localStorage.getItem("access_token"));

  useEffect(() => {
    viewBook(book_id).then((resp) => {
      setBook(resp.data);
    });

    viewUser(user_id?.id).then((resp) => {
      setUser(resp.data);
    });
  }, []);

  function handleOnChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleUpdateBook() {
    const data = {
      title: formData.title || book.title,
      category: formData.category || book.category,
      author: user?.name,
      price: Number(formData.price) || Number(book.price),
      description: formData.description || book.description,
    };
    setLoading(true);

    try {
      await editBook(book_id, data)
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
            ? "Livro editado com sucesso"
            : "Falha ao adicionar livro"
        }
        description={
          state === "success"
            ? "Seu livro foi editado com sucesso"
            : "Sua postagem falhou, por favor tente mais tarde."
        }
      />

      <ErrorModal
        isOpen={loading}
        message="Aguarde um momento..."
        description="Sua postagem está a ser editada."
      />

      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <div className="w-64 h-64 rounded-full bg-blue-700 blur-[140px] absolute z-[1] bottom-10 right-10"></div>

      <div className="h-full w-full p-10 flex gap-12">
        <Navbar active="books" />

        <main className="w-[83%] h-full z-10 flex flex-col gap-12 overflow-x-hidden pr-5">
          <Header />

          <div className="w-full h-full flex flex-col gap-14 pr-5 overflow-y-auto overflow-x-hidden  scrollbar">
            <div className="flex gap-4 flex-col">
              <h2 className="font-poppinsBold text-2xl">Editar Livro</h2>

              <span className="xs:text-sm xl:text-base">
                Preenha os campos abaixo, para editar os dados do seu livro na
                prataforma.
              </span>
            </div>

            <form
              onSubmit={handleSubmit(handleUpdateBook)}
              className="w-full items-end flex flex-col gap-4 p-10 rounded-xl bg-variant-2 border-2 border-[#ffffff20]"
            >
              <div className="flex w-full items-center gap-3">
                <Input
                  type="text"
                  name="title"
                  value={formData.title || book?.title}
                  onChange={handleOnChange}
                  placeholder="Digite um titulo para o livro"
                />
              </div>

              <div className="flex w-full items-center gap-3">
                <Input
                  type="number"
                  value={formData.price || book?.price}
                  name="price"
                  onChange={handleOnChange}
                  placeholder="Digite um preço para o livro"
                />
                <select
                  name="category"
                  value={formData.category || book?.category}
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
                  value={formData.description || book?.description}
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
                value="Salvar"
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
