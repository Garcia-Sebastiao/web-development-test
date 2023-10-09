import {
  facebookIcon,
  illustration,
  monkey,
  twitterIcon,
  userImage,
} from "../../../assets";
import Book from "../../../components/common/Books/Book";
import Header from "../../../components/layout/Header";
import Navbar from "../../../components/layout/Navbar";
import LinkButton from "../../../components/common/LinkButton";
import { Link } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";
import { useAuth } from "../../../contexts/AuthContext";
import { useEffect, useState } from "react";
import useJWT from "../../../hooks/useJWT";

export default function AuthorProfile() {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});
  const { viewAuthorBooks, viewUser } = useHttp();
  const { decode } = useJWT();
  const user_id = decode(localStorage.getItem("access_token"));

  useEffect(() => {
    viewAuthorBooks(user_id.id).then((resp) => {
      setBooks(resp.data);
    });

    viewUser(user_id.id).then((resp) => {
      setUser(resp.data);
    });
  }, []);

  return (
    <div className="w-full h-screen relative bg-cover overflow-x-hidden">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <div className="w-64 h-64 rounded-full bg-blue-700 blur-[140px] absolute z-[1] bottom-10 right-10"></div>

      <div className="h-full w-full p-10 flex gap-12">
        <Navbar active="profile" />

        <main className="w-[83%] h-full z-10 flex flex-col gap-12 overflow-x-hidden pr-5">
          <Header />

          <div className="w-full h-full flex flex-col gap-14 pr-5 overflow-y-auto overflow-x-hidden  scrollbar">
            <section className="w-full bg-variant-2 items-center gap-10 rounded-xl p-10 flex">
              <div className="w-80 h-80 rounded-full">
                <img
                  src={userImage}
                  alt=""
                  className="w-full h-full rounded-full object-cover border-2 border-white"
                />
              </div>

              <div className="flex justify-between flex-1 items-start">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <h2 className="text-4xl font-poppinsSemiBold">
                      {user?.name}
                    </h2>
                    <span className="text-sm text-gray-400">{user?.email}</span>
                  </div>
                  <span className="max-w-3xl leading-loose">
                    Author de um dos mais belos livros de contos alguma vez
                    escritos.
                  </span>

                  <div className="flex items-center gap-6">
                    <img src={facebookIcon} className="w-8" alt="" />
                    <img src={twitterIcon} className="w-8" alt="" />
                  </div>
                </div>

                <LinkButton
                  href="/system/books/add_book"
                  value="Postar Livro"
                  className="bg-pink-500"
                />
              </div>
            </section>

            <section className="w-full flex flex-col gap-4 items-start">
              <div className="w-full flex justify-between items-center">
                <h3 className="text-xl font-poppinsSemiBold">Meus Livros.</h3>

                <Link
                  to="/system/profile/my_books"
                  className="text-sm text-white"
                >
                  Ver todos
                </Link>
              </div>

              <div className="w-full flex gap-6 mt-6 flex-wrap">
                {books?.length > 0 ? (
                  books
                    ?.slice(0, 4)
                    .map((book) => (
                      <Book
                        image={monkey}
                        likes="42 mil"
                        stars={3.5}
                        id={book._id}
                        title={book.title}
                        category={book.category}
                        description={book.description}
                      />
                    ))
                ) : (
                  <h2 className="text-lg font-poppinsSemiBold">
                    Sem livros publicados.
                  </h2>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>

      <div className="w-72 h-72 opacity-40 rounded-full bg-blue-400 blur-[140px] absolute top-10 right-10 z-[1]"></div>
      <div className="w-24 h-24 rounded-full bg-blue-400 blur-[100px] opacity-50 absolute top-96 left-[50%] z-[1]"></div>
    </div>
  );
}
