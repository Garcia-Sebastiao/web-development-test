import Button from "../Button";

export default function ConfirmModal({
  message,
  description,
  onClose,
  isOpen,
  onConfirm,
  className,
}) {
  return (
    <div
      className={`${className} absolute w-96 p-4  flex-col items gap-4 border-2 backdrop-blur-sm z-10 border-[#ffffff30] bg-variant-1 rounded-md ${
        !isOpen ? "hidden" : "flex"
      }`}
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-md">{message}</h2>
      </div>

      <div className="flex w-full gap-3 items-center">
        <Button onClick={onConfirm} value="Sim" className="bg-pink-500 px-4 py-2"  />
        <Button onClick={onClose} value="Não" className="bg-variant-2 px-4 py-2"  />
      </div>
    </div>
  );
}
