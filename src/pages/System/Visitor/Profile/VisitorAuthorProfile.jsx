import {
  facebookIcon,
  illustration,
  monkey,
  twitterIcon,
  userImage,
} from "../../../../assets";
import Book from "../../../../components/common/Books/Book";
import Header from "../../../../components/layout/Header";
import Navbar from "../../../../components/layout/Navbar";
import LinkButton from "../../../../components/common/LinkButton";

export default function VisitorAuthorProfile() {
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
                      Trippie Redd
                    </h2>
                    <span className="text-sm text-gray-400">
                      trippieredd@gmail.com
                    </span>
                  </div>
                  <span className="max-w-3xl leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem, consequatur ea cumque quo neque ullam
                    impedit officiis facilis deserun.
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
              <h3 className="text-xl font-poppinsSemiBold">Livros do autor.</h3>

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
                <Book
                  image={monkey}
                  likes="42 mil"
                  stars={3.5}
                  title="One Piece"
                  category="Aventura"
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
