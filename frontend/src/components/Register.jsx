import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ BASE_URL }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [disable, setDisable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);

    const userDetails = {
      name: name,
      email: email,
      password: password,
    };

    const url = `${BASE_URL}/register/`;
    axios
      .post(url, userDetails)
      .then((response) => {
        if (response.data === "User already registered!") {
          setErrorMsg(response.data);
          setDisable(false);
        } else if (response.data === "Added into DB") {
          navigate("/login");
          setDisable(false);
        }
      })
      .catch((err) => console.log(`Error =>  ${err}`));
  };

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center bg-gradient-to-r md:bg-gradient-to-b from-teal-500 to-teal-300">
      <div className="w-[30%] lg:w-[60%] md:w-[70%] sm:w-[80%] p-5 rounded-xl bg-teal-100">
        <h1 className="text-center my-8 text-2xl font-extrabold ">
          Register your account
        </h1>
        <p className="text-center mb-5 text-red-500">{errorMsg}</p>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-transparent border-2 rounded-lg border-teal-600 p-2 outline-none w-[70%] md:w-[100%]"
            type="text"
            name="username"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className="my-10 bg-transparent border-2 rounded-lg border-teal-600 p-2 outline-none w-[70%] md:w-[100%]"
            type="email"
            name="email"
            placeholder="Email"
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
          <button
            disabled={disable}
            className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg mt-10 mb-8 py-3 text-white tracking-wider font-semibold text-xl w-[70%] md:w-[100%]"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
