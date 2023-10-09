import { useParams } from "react-router-dom";
import {
  facebookIcon,
  illustration,
  monkey,
  notFound,
  twitterIcon,
  userImage,
} from "../../../assets";
import SaleBook from "../../../components/common/Books/SaleBook";
import useHttp from "../../../hooks/useHttp";
import Header from "../../../components/layout/Header";
import Navbar from "../../../components/layout/Navbar";
import BookCard from "../../../components/common/Books/BookCard";
import { useEffect, useState } from "react";

export default function SearchResults() {
  const params = useParams();
  const { searchBook } = useHttp();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    searchBook(params["search_value"]).then((resp) => {
      setBooks(resp.data);
    });
  }, []);

  return (
    <div className="w-full h-screen relative bg-cover overflow-x-hidden">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <div className="w-64 h-64 rounded-full bg-blue-700 blur-[140px] absolute z-[1] bottom-10 right-10"></div>

      <div className="h-full w-full p-10 flex gap-12">
        <Navbar active="profile" />

        <main className="w-[83%] h-full z-10 flex flex-col gap-12 overflow-x-hidden pr-5">
          <Header param={params["search_value"]} />

          <div className="w-full h-full flex gap-14 pr-5 overflow-hidden">
            <section className="flex-1 flex flex-col h-full scrollbar overflow-y-auto pr-6">
              {books?.length > 0 ? (
                <>
                  <h2 className="text-2xl text-white font-poppinsSemiBold">
                    Resultados de pesquisa para "{params["search_value"]}".
                  </h2>

                  <div className="flex flex-col mt-12 gap-6">
                    {books?.map((book) => (
                      <BookCard
                        image={monkey}
                        id={book._id}
                        title={book.title}
                        category={book.category}
                        description={book.description}
                        likes="42 mil"
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-2xl text-white font-poppinsSemiBold">
                    Sem resultados de pesquisa possíveis para "
                    {params["search_value"]}".
                  </h2>

                  <div className="w-full flex-1  flex items-center justify-center">
                    <img src={notFound} className="opacity-70" alt="" />
                  </div>
                </>
              )}
            </section>
          </div>
        </main>
      </div>

      <div className="w-72 h-72 opacity-40 rounded-full bg-blue-400 blur-[140px] absolute top-10 right-10 z-[1]"></div>
      <div className="w-24 h-24 rounded-full bg-blue-400 blur-[100px] opacity-50 absolute top-96 left-[50%] z-[1]"></div>
    </div>
  );
}
