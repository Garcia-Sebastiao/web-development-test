import { heartFillIcon } from "../../../assets";
import LinkButton from "../LinkButton";
import { useEffect, useState } from "react";
import useHttp from "../../../hooks/useHttp";

export default function BookCard({ image, title, category, description, id }) {
  const { viewLikes } = useHttp();
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    viewLikes(id).then((resp) => {
      setLikes(resp.data);
    });
  }, []);

  return (
    <div className="w-full  rounded-xl p-8 bg-variant-2 flex gap-5">
      <div className="w-48 h-48">
        <img
          src={image}
          className="w-full h-full rounded-xl object-cover"
          alt=""
        />
      </div>

      <div className="flex w-full flex-col gap-4 items-start">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl font-poppinsSemiBold">{title}</h2>
            <span className="text-sm text-gray-300">{category}</span>
          </div>

          <LinkButton
            value="Ler"
            href={`/system/books/read_book/${id}`}
            className="bg-pink-500"
          />
        </div>

        <div>
          <p className="text-sm leading-loose max-w-2xl">
            {description.slice(0, 100)}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src={heartFillIcon} className="w-4 opacity-70" alt="" />
            <span className="text-sm text-gray-300">
              {likes?.length} Reações.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
