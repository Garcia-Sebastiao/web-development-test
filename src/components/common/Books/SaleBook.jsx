import { heartFillIcon, starIcon } from "../../../assets";

export default function SaleBook({
  image,
  title,
  description,
  stars,
  author,
  price,
  likes,
  off,
}) {
  return (
    <div className="flex flex-1 flex-col items-start max-w-fit min-w-[190px] gap-4">
      <div className="w-full relative h-60">
        {off ? <div className="absolute right-5 top-0 bg-blue-700 flex flex-col items-center justify-center w-14 h-20 rounded-b-md" >
            <h2 className="text-lg text-white font-poppinsMedium">{off}</h2>
            <small className="text-white font-poppinsMedium">Desc.</small>
        </div> : ''}
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl object-cover h-full"
        />
      </div>

      <div className="w-full flex items-start flex-col-reverse gap-3">
        <div className="flex flex-col">
          <h3 className="text-lg font-poppinsMedium">{title}</h3>
          <span className="text-sm">{author} - {price}</span>
        </div>

        <div className="flex justify-between w-full items-center">
          <div className="flex items-center gap-2">
            <img src={heartFillIcon} className="w-3 opacity-50" alt="" />
            <span className="text-xs opacity-70">{likes} Reações.</span>
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
