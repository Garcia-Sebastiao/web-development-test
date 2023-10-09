import React, { useState } from "react";
import { deleteIcon, editIcon } from "../../../assets";
import { Link } from "react-router-dom";
import ConfirmModal from "../Modals/ConfirmModal";
import useHttp from "../../../hooks/useHttp";

export default function BookRow({ image, title, description, id }) {
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const { removeBook } = useHttp();

  async function onDeleteBook(book_id) {
    await removeBook(book_id).then();
    {
      window.location.reload();
    }
  }

  return (
    <div className="w-full relative justify-between p-6 rounded-xl bg-variant-2 flex items-center">
      <div className="flex gap-4">
        <div className="w-32 h-32">
          <img
            src={image}
            className="w-full h-full rounded-lg object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="text-lg font-poppinsSemiBold">{title}</h3>
          <span className="text-sm max-w-sm">{description.slice(0, 100)}</span>
        </div>
      </div>

      <ConfirmModal
        className="right-8"
        message="Tem certeza que pretende remover este livro? A operação é irreversível."
        isOpen={openConfirmModal}
        onConfirm={() => onDeleteBook(id)}
        onClose={() => setOpenConfirmModal(false)}
      />
      <div className="flex relative flex-col gap-3 items-center">
        <button
          onClick={() => setOpenConfirmModal(true)}
          className="p-2 hover:brightness-75 transition duration-150 outline-none flex items-center justify-center rounded-full bg-[#ffffff20]"
        >
          <img src={deleteIcon} className="w-4" alt="" />
        </button>
        <Link
          to={`/system/books/edit_book/${id}`}
          className="p-2 hover:brightness-75 transition duration-150 outline-none flex items-center justify-center rounded-full bg-[#ffffff20]"
        >
          <img src={editIcon} className="w-4" alt="" />
        </Link>
      </div>
    </div>
  );
}
