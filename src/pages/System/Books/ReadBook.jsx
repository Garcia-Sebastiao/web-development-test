import {
  facebookIcon,
  illustration,
  monkey,
  twitterIcon,
  userImage,
} from "../../../assets";

import Header from "../../../components/layout/Header";
import Navbar from "../../../components/layout/Navbar";
import useHttp from "../../../hooks/useHttp";
import Comment from "../../../components/common/Comment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useJWT from "../../../hooks/useJWT";

export default function ReadBook() {
  const [book, setBook] = useState();
  const [comments, setComments] = useState([]);
  const {
    viewBook,
    viewComments,
    likeBook,
    commentBook,
    viewUserLike,
    removeLike,
  } = useHttp();
  const [formComment, setFormComment] = useState();
  const params = useParams();
  const { register, handleSubmit } = useForm();
  const [iliked, setILiked] = useState(false);
  const { decode } = useJWT();
  const user_id = decode(localStorage.getItem("access_token"));

  const { book_id } = params;

  useEffect(() => {
    viewBook(book_id).then((res) => {
      setBook(res.data);
    });

    viewComments(book_id).then((res) => {
      setComments(res.data);
    });

    viewUserLike(user_id.id, book_id).then((res) => {
      if (res.data !== "") {
        setILiked(true);
      }
    });
  }, []);

  async function handleComment() {
    const data = {
      bookId: book_id,
      description: formComment,
    };

    await commentBook(data).then((resp) => {
      window.location.reload();
    });
  }

  async function handleLikeBook() {
    const data = {
      bookId: book_id,
    };

    await likeBook(data).then((resp) => {
      window.location.reload();
    });
  }

  async function handleRemoveLike() {
    await removeLike(user_id.id, book_id).then((resp) => {
      window.location.reload();
    });
  }

  return (
    <div className="w-full h-screen relative bg-cover overflow-x-hidden">
      <div className="w-96 h-96 rounded-full bg-pink-500 blur-[140px] absolute top-10 left-10"></div>
      <div className="w-64 h-64 rounded-full bg-blue-700 blur-[140px] absolute z-[1] bottom-10 right-10"></div>

      <div className="h-full w-full p-10 flex gap-12">
        <Navbar active="books" />

        <main className="w-[83%] h-full z-10 flex flex-col gap-12 overflow-x-hidden pr-5">
          <Header />

          <div className="w-full h-full flex flex-col gap-14 pr-5 overflow-hidden">
            <div className="w-full flex justify-between items-center">
              <h2 className="text-2xl font-poppinsSemiBold">Comentários</h2>

              <button
                onClick={iliked ? handleRemoveLike : handleLikeBook}
                className={`text-white py-3 px-8 rounded-md ${
                  iliked ? "bg-blue-700" : "bg-variant-3"
                } transition duration-150 hover:bg-blue-700`}
              >
                {iliked ? "Descurtir" : "Curtir"}
              </button>
            </div>

            <section className="w-full gap-6 flex h-full">
              <div className="flex-[0.70] max-h-ful pr-8 flex flex-col gap-4 pb-32 overflow-y-auto scrollbar">
                <form
                  onSubmit={handleSubmit(handleComment)}
                  className="w-full flex flex-col gap-4 items-start"
                >
                  <textarea
                    name="description"
                    id=""
                    cols="30"
                    className="w-full p-4 rounded-md max-h-[180px] min-h-[120px] bg-variant-1 outline-none"
                    rows="10"
                    onChange={(e) => setFormComment(e.target.value)}
                    placeholder="Digite seu comentário"
                  ></textarea>

                  <button className="text-white bg-pink-500 py-3 px-8 rounded-md">
                    Comentar
                  </button>
                </form>

                <div className="flex flex-col gap-4 mt-4 w-full">
                  {comments?.length > 0 ? (
                    comments.map((comment) => (
                      <Comment
                        image={userImage}
                        name="Mirantes.io"
                        time="1 dia atrás"
                        description={comment.description}
                      />
                    ))
                  ) : (
                    <span>Sem comentários disponíveis.</span>
                  )}
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-6 h-[88%] pr-4 overflow-y-auto scrollbar pb-16 rounded-xl">
                <div className="w-full h-96">
                  <img
                    src={monkey}
                    className="w-full h-full rounded-xl object-cover"
                    alt=""
                  />
                </div>

                <div className="w-full flex flex-col gap-6">
                  <div className="flex flex-col gap-1">
                    <h2 className="text-3xl">{book?.title}</h2>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">
                        De: {book?.author}
                      </span>
                      <span className="text-sm text-gray-400">
                        Categoria: {book?.category}
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="leading-loose">{book?.description}</p>
                  </div>
                </div>
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
