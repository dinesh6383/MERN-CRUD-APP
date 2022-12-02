import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoBox = ({ details, handleDelete, setModal, setModalId }) => {
  const deleteItem = () => {
    handleDelete(details);
  };

  const handleModal = () => {
    setModal(true);
    setModalId(details._id);
  };

  return (
    <div className="bg-gradient-to-r from-zinc-400 to-zinc-300 mt-5 mx-auto w-[400px] xsm:w-[350px] py-5 px-5 rounded-2xl flex items-center justify-between">
      <div className="text-2xl xsm:text-xl font-bold text-slate-800">
        <p>{details.todo}</p>
      </div>
      <div className="flex w-[60px] text-2xl items-center justify-between">
        <div onClick={handleModal}>
          <BiEditAlt className="text-cyan-500 cursor-pointer" />
        </div>
        <div onClick={deleteItem}>
          <RiDeleteBin6Line className="text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TodoBox;
