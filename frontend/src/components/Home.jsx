import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100%] h-[100vh] grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 md:grid-cols-1  md:grid-rows-2 items-center bg-gradient-to-r md:bg-gradient-to-b from-teal-500 to-teal-300">
      <div className="flex justify-end lg:justify-center md:justify-center items-center lg:mt-20 md:mt-20">
        <img
          className="w-[70%] lg:w-[50%] md:w-[60%] sm:w-[70%] xsm:w-[80%]"
          src="/images/login-page-image.png"
          alt="home"
        ></img>
      </div>
      <div className="ml-32 w-max lg:mx-auto md:mx-auto">
        <div>
          <button
            className="w-80 py-5 md:py-4 rounded-full  border-2   bg-slate-800 font-bold text-md text-white tracking-widest"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </button>
        </div>
        <div className="w-[100%] text-center my-5">
          <p className="font-bold text-lg">or</p>
        </div>
        <div>
          <button
            className="w-80 py-5 md:py-4 rounded-full  border-2   bg-slate-800 font-bold text-md text-white tracking-widest"
            onClick={() => navigate("/register")}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
