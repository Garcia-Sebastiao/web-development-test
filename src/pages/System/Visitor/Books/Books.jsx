import { Link } from "react-router-dom";
import { illustration, monkey } from "../../../assets";
import Book from "../../../components/common/Books/Book";
import Header from "../../../components/layout/Header";
import Navbar from "../../../components/layout/Navbar";

export default function Books() {
  return (
    <div className="w-full h-screen relative bg-cover overflow-x-hidden">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <div className="w-64 h-64 rounded-full bg-blue-700 blur-[140px] absolute z-[1] bottom-10 right-10"></div>

      <div className="h-full w-full p-10 flex gap-12">
        <Navbar active="books" />

        <main className="w-[83%] h-full z-10 flex flex-col gap-12 overflow-x-hidden pr-5">
          <Header />

          <div className="w-full h-full flex gap-14 pr-5 overflow-hidden">
            <section className="flex-1 h-full flex flex-col gap-12 scrollbar overflow-y-auto pr-6">
              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-2xl text-white font-poppinsSemiBold">
                    Best Seller
                  </h2>

                  <Link to="" className="text-sm">
                    Ver todos
                  </Link>
                </div>

                <div className="w-full flex gap-6 mt-6 flex-wrap">
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-2xl text-white font-poppinsSemiBold">
                    Aventura
                  </h2>

                  <Link to="" className="text-sm">
                    Ver todos
                  </Link>
                </div>

                <div className="w-full flex gap-6 mt-6 flex-wrap">
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-2xl text-white font-poppinsSemiBold">
                    Seriados
                  </h2>

                  <Link to="" className="text-sm">
                    Ver todos
                  </Link>
                </div>

                <div className="w-full flex gap-6 mt-6 flex-wrap">
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                  <Book
                    image={monkey}
                    likes="42 mil"
                    stars={3.5}
                    title="One Piece"
                    category="Aventura"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem cumque hic nam..."
                  />
                </div>
              </div>
            </section>

            <aside className="flex-[0.3] backdrop-blur-sm h-full p-10 bg-variant-2 rounded-xl">
              <h2 className="text-xl text-white font-poppinsSemiBold">
                Opções de filtros.
              </h2>
            </aside>
          </div>
        </main>
      </div>

      <div className="w-72 h-72 opacity-40 rounded-full bg-blue-400 blur-[140px] absolute top-10 right-10 z-[1]"></div>
      <div className="w-24 h-24 rounded-full bg-blue-400 blur-[100px] opacity-50 absolute top-96 left-[50%] z-[1]"></div>
    </div>
  );
}
