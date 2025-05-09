import React from "react";
import { useNavigate } from "react-router-dom";
import Laptop from "../pages/Laptop.jpg";
const Home = () => {
  const nagivate = useNavigate();
  return (
    <div className="border-none w-full  relative gap-3">
      <div
        className=" h-screen w-full bg-cover bg-center opacity-90 blur-xs "
        style={{ backgroundImage: `url(${Laptop})` }}
      ></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Welcome to Your BlogSpace</h1>
        <p className="font-bold text-2xl text-blue-700">
          Share your thought ,stories,and ideas with the worlds
        </p>
        <div className="flex gap-3 my-5">
          <button
            onClick={() => nagivate("/login")}
            className="text-white bg-green-700 text-center w-25 h-10 rounded-xl
        cursor-pointer text-1xl font-medium "
          >
            login
          </button>

          <button
            onClick={() => nagivate("/signup")}
            className="text-green-700 bg-amber-50 border-2 border-green-700 text-center w-25 h-10 rounded-xl
        cursor-pointer text-1xl font-medium "
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
