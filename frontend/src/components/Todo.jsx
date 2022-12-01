import React, { useEffect } from "react";
import TodoBox from "./TodoBox";
import axios from "axios";

const Todo = ({
  setModal,
  setModalId,
  paramId,
  fetchData,
  setTodo,
  todo,
  todoList,
  name,
  BASE_URL,
}) => {
  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoItem = {
      todo: todo,
    };

    const url = `${BASE_URL}/todo/add/${paramId}`;
    axios
      .post(url, todoItem)
      .then((response) => {
        console.log(response.data);
        setTodo("");
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (value) => {
    console.log(JSON.stringify(value));
    const url = `${BASE_URL}/todo/delete/${paramId}`;

    axios
      .delete(url, { data: value })
      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-b from-cyan-800 to-cyan-600 overflow-hidden">
      <div className="flex items-center justify-between py-3 px-5 shadow-slate-600 shadow-lg">
        <p className="text-2xl font-extrabold text-slate-200 ">My Todo</p>
        <div className="border-2 border-slate-500 rounded-xl px-3 py-1 cursor-pointer">
          <p className="text-md text-white">{name}</p>
        </div>
      </div>
      <div className="mt-10 text-center py-5">
        <form onSubmit={handleSubmit}>
          <input
            className="bg-transparent outline-none border-b-2 border-cyan-500 p-2 text-2xl md:text-xl sm:text-lg text-white"
            type="text"
            required
            placeholder="Enter your Todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          ></input>
          <button className="py-2 px-5 md:py-1 md:px-3 ml-5 bg-gradient-to-r from-cyan-600 to-cyan-300 rounded-lg text-xl font-bold text-slate-700">
            Add
          </button>
        </form>
      </div>
      <div className="list-box w-[500px] md:w-[420px] sm:w-[450px] xsm:w-[100%] xsm:s h-[500px] sm:h-[500px] mx-auto overflow-x-hidden py-2">
        {todoList.map((list, index) => {
          return (
            <TodoBox
              key={index}
              details={list}
              handleDelete={handleDelete}
              setModal={setModal}
              setModalId={setModalId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

/*

*/
