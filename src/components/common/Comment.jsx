export default function Comment({ name, time, description, image }) {
  return (
    <div className="w-full p-4 rounded-md bg-variant-2 border-2 flex flex-col gap-4 border-[#ffffff30]">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full">
          <img
            src={image}
            className="w-full h-full rounded-full object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-md font-poppinsMedium">{name}</h4>
          <small className="text-gray-400">{time}</small>
        </div>
      </div>

      <div className="w-full">
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
}
