import { useEffect, useState } from "react";
import { heartFillIcon, starIcon } from "../../../assets";
import LinkButton from "../LinkButton";
import useHttp from "../../../hooks/useHttp";

export default function Book({
  image,
  title,
  description,
  stars,
  category,
  id,
}) {
  const [showReadButton, setShowReadButton] = useState(false);
  const { viewLikes } = useHttp();
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    viewLikes(id).then((resp) => {
      setLikes(resp.data);
    });
  }, []);

  return (
    <div className="flex flex-1 flex-col items-start max-w-prose min-w-[190px] gap-4">
      <div
        onMouseOver={() => setShowReadButton(true)}
        onMouseOut={() => setShowReadButton(false)}
        className="w-full h-60 relative"
      >
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl object-cover h-full"
        />

        {showReadButton ? (
          <LinkButton
            href={`/system/books/read_book/${id}`}
            value="Ler"
            className="bg-blue-700 absolute bottom-5 right-5 "
          />
        ) : (
          ""
        )}
      </div>

      <div className="w-full flex items-start flex-col-reverse gap-3">
        <div className="flex flex-col">
          <h3 className="text-lg font-poppinsMedium">{title}</h3>
          <span className="text-sm">{category}</span>
        </div>

        <div className="flex justify-between w-full items-center">
          <div className="flex items-center gap-2">
            <img src={heartFillIcon} className="w-3 opacity-50" alt="" />
            <span className="text-xs opacity-70">{likes?.length} {likes?.length > 1 ? 'curtidas' : 'curtida'}</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs">{stars}</span>
            <img src={starIcon} className="w-4 opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
}
