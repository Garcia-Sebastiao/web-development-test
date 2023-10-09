import { monkey } from "../../../assets";
import Book from "../../../components/common/Books/Book";
import Header from "../../../components/layout/Header";
import Navbar from "../../../components/layout/Navbar";
import LinkButton from "../../../components/common/LinkButton";
import { Link } from "react-router-dom";
import BookRow from "../../../components/common/Books/BookRow";
import useHttp from "../../../hooks/useHttp";
import useJWT from "../../../hooks/useJWT";
import { useEffect, useState } from "react";

export default function MyBooks() {
  const [myBooks, setMyBooks] = useState([]);
  const { viewAuthorBooks } = useHttp();
  const { decode } = useJWT();
  const user_id = decode(localStorage.getItem("access_token"));

  useEffect(() => {
    viewAuthorBooks(user_id.id).then((resp) => {
      setMyBooks(resp.data);
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
            <div className="w-full justify-between items-center flex">
              <h3 className="text-xl font-poppinsSemiBold">Meus Livros.</h3>
              <LinkButton
                href="/system/books/add_book"
                value="Postar Livro"
                className="bg-pink-500"
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              {myBooks?.length > 0 ? (
                myBooks?.map((book) => (
                  <BookRow
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    image={monkey}
                    description={book.description}
                  />
                ))
              ) : (
                <h2 className="text-lg font-poppinsSemiBold">
                  Sem livros publicados.
                </h2>
              )}
            </div>
          </div>
        </main>
      </div>

      <div className="w-72 h-72 opacity-40 rounded-full bg-blue-400 blur-[140px] absolute top-10 right-10 z-[1]"></div>
      <div className="w-24 h-24 rounded-full bg-blue-400 blur-[100px] opacity-50 absolute top-96 left-[50%] z-[1]"></div>
    </div>
  );
}
