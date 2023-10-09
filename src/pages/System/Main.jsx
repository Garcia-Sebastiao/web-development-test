import { useEffect, useState } from "react";
import { illustration, monkey } from "../../assets";
import Book from "../../components/common/Books/Book";
import SaleBook from "../../components/common/Books/SaleBook";
import Button from "../../components/common/Button";
import LinkButton from "../../components/common/LinkButton";
import Header from "../../components/layout/Header";
import Navbar from "../../components/layout/Navbar";
import useHttp from "../../hooks/useHttp";

export default function Main() {
  const [books, setBooks] = useState([]);
  const { viewBooks } = useHttp();

  useEffect(() => {
    viewBooks().then((resp) => {
      setBooks(resp.data);
    });
  }, []);

  return (
    <div className="w-full h-screen relative bg-cover overflow-x-hidden">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <div className="w-64 h-64 rounded-full bg-blue-700 blur-[140px] absolute z-[1] bottom-10 right-10"></div>

      <div className="h-full w-full p-10 flex gap-12">
        <Navbar active="home" />

        <main className="w-[83%] h-full z-10 flex flex-col gap-12 overflow-x-hidden pr-5">
          <Header />

          <div className="w-full h-full flex flex-col gap-14 pr-5 overflow-y-auto overflow-x-hidden  scrollbar">
            <section className="w-full flex gap-8 flex-wrap">
              <div className="p-10 rounded-xl bg-variant-2 flex items-center justify-between flex-1 flex-wrap">
                <div className="flex flex-col gap-3 items-start">
                  <h2 className="lg:text-xl xl:text-2xl font-poppinsSemiBold">
                    Seja bem vindo de volta!
                  </h2>
                  <span className="max-w-md">
                    Aproveite o dia, segure um cafè e tenha acesso aos melhores
                    livros alguma vez escritos.
                  </span>
                  <LinkButton
                    value="Ver"
                    href="/system/books/"
                    className="bg-cover text-center px-14 mt-3"
                  />
                </div>

                <img src={illustration} className="xs:w-52 xl:w-72" alt="" />
              </div>
              <div className="flex-[0.5] lg:flex-col xl:flex-row flex gap-6 p-10 rounded-xl bg-variant-2">
                <div className="flex-[0.9] h-full rounded-md">
                  <img
                    src={monkey}
                    className="w-full h-full object-cover rounded-xl"
                    alt=""
                  />
                </div>

                <div className="flex-1 flex-col flex items-start gap-4">
                  <h3 className="text-lg font-poppinsSemiBold">One Piece</h3>

                  <p className="text-sm leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos exercitationem cumque hic nam, architecto molestias,
                    assumenda...
                  </p>

                  <LinkButton value="Ler" className="bg-pink-500 px-10" />
                </div>
              </div>
            </section>

            <section className="w-full flex flex-col gap-4 items-start">
              <h3 className="text-xl font-poppinsSemiBold">
                Seus livros recomendados.
              </h3>

              <span className="xs:text-sm xl:text-base max-w-md">
                Recomendamos para você alguns dos melhores livros para essa
                semana.
              </span>

              <div className="w-full flex gap-6 mt-6 flex-wrap">
                {books?.length > 0 ? (
                  books
                    ?.slice(0, 4)
                    .map((book) => (
                      <Book
                        image={monkey}
                        likes="42 mil"
                        stars={3.5}
                        title={book.title}
                        category={book.category}
                        description={book.description}
                        id={book?._id}
                      />
                    ))
                ) : (
                  <span>Sem livros publicados.</span>
                )}
              </div>
            </section>

            <section className="w-full flex flex-col gap-4 items-start">
              <h3 className="text-xl font-poppinsSemiBold">Loja</h3>

              <span className="xs:text-sm xl:text-base max-w-md">
                Verifique os livros mais vendidos da semana.
              </span>

              <div className="w-full flex gap-6 mt-6 flex-wrap">
                <SaleBook
                  image={monkey}
                  likes="42 mil"
                  stars={3.5}
                  off="40%"
                  title="One Piece"
                  author="Oda Sensei"
                  price="1500.00 AOA"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                />
                <SaleBook
                  image={monkey}
                  likes="42 mil"
                  stars={3.5}
                  off="40%"
                  title="One Piece"
                  author="Oda Sensei"
                  price="1500.00 AOA"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                />
                <SaleBook
                  image={monkey}
                  likes="42 mil"
                  stars={3.5}
                  off="40%"
                  title="One Piece"
                  author="Oda Sensei"
                  price="1500.00 AOA"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                />
                <SaleBook
                  image={monkey}
                  likes="42 mil"
                  stars={3.5}
                  off="40%"
                  title="One Piece"
                  author="Oda Sensei"
                  price="1500.00 AOA"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                />
                <SaleBook
                  image={monkey}
                  likes="42 mil"
                  stars={3.5}
                  off="40%"
                  title="One Piece"
                  author="Oda Sensei"
                  price="1500.00 AOA"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                />
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
