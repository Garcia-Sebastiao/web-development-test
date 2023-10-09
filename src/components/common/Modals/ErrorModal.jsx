import Button from "../Button";

export default function ErrorModal({ message, description, onClick, isOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full bg-[#00000090] backdrop-blur-sm z-50 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="w-full h-full relative">
        <div className=" absolute top-24 w-96 p-10 flex flex-col items gap-4 -translate-x-[50%] left-[50%]  border-2 border-[#ffffff30] bg-variant-2 rounded-md">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">{message}</h2>
            <span className="text-sm">{description}</span>
          </div>

          <Button onClick={onClick} value="Ok" className="bg-pink-500" />
        </div>
      </div>
    </div>
  );
}
