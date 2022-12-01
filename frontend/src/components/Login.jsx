import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ BASE_URL }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      email: email,
      password: password,
    };

    const url = `${BASE_URL}/login`;
    axios
      .post(url, userDetails)
      .then((response) => {
        if (
          response.data === "User not found!" ||
          response.data === "Incorrect username & password!"
        ) {
          setError(response.data);
        } else {
          navigate(`/todo/${response.data._id}`);
        }
      })
      .catch((err) => console.log(err.data));
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-gradient-to-r md:bg-gradient-to-b from-teal-500 to-teal-300">
      <div className="w-[30%] lg:w-[60%] md:w-[70%] sm:w-[80%] p-5 rounded-xl bg-teal-100">
        <h1 className="text-center my-5 text-2xl font-extrabold ">
          Login to your account
        </h1>
        <p className="text-center mb-5 text-red-500">{error}</p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="mt-5 mb-10 bg-transparent border-2 rounded-lg border-teal-600 p-2 outline-none w-[70%] md:w-[100%]"
            type="email"
            placeholder="Email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="bg-transparent border-2 rounded-lg border-teal-600 p-2 outline-none w-[70%] md:w-[100%]"
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg mt-10 mb-8 py-3 text-white tracking-wider font-semibold text-xl w-[70%] md:w-[100%]">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
