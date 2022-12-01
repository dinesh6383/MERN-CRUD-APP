import React, { useState } from "react";
import axios from "axios";

const EditModal = ({ setModal, modalId, paramId, fetchData, BASE_URL }) => {
  const [todo, setTodo] = useState("");

  const handleEdit = () => {
    const editedTodo = {
      id: modalId,
      todo: todo,
    };
    console.log(editedTodo);

    const url = `${BASE_URL}/todo/update/${paramId}`;

    axios
      .post(url, editedTodo)
      .then((response) => {
        console.log(response.data);
        fetchData();
        setModal(false);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <div className="w-[450px] h-[200px] sm:w-[380px] sm:h-[180px] rounded-lg bg-gradient-to-r from-zinc-200 to-zinc-100 grid grid-cols-1">
      <div className="row-span-2 border-b-2 border-slate-400 flex justify-center items-center">
        <input
          className="bg-transparent outline-none p-2 text-2xl md:text-xl sm:text-lg border-b-2 border-cyan-500 "
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter here"
        ></input>
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={handleEdit}
          className="px-4 py-2 mr-5 bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white rounded-lg border-none outline-none "
        >
          Add
        </button>
        <button
          onClick={() => {
            setModal(false);
            setTodo("");
          }}
          className="px-4 py-2 mr-5 bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white rounded-lg border-none outline-none "
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditModal;
