import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const submitHandler = async (evt) => {
    evt.preventDefault();

    const email = evt.target[0].value;
    const password = evt.target[1].value;

    await firebase.loginUser(email, password);
  };

  useEffect(() => {
    if (firebase.isLoggedIn) {
      toast.success("Login successful");
      navigate("/");
    }
  }, [firebase, navigate]);

  return (
    <div className="w-screen h-screen bg-[#A080CC] flex justify-center items-center">
      <div className="flex flex-col justify-center gap-y-6 items-center w-[40%] h-[70%] rounded-lg bg-[#855CBD] shadow-2xl">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-[24px] font-[700] text-white">Book Store</h1>
          <h2 className="text-[20px] font-[700]">Login</h2>
        </div>

        <form
          action=""
          className="flex flex-col items-center w-full"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] text-white font-[500]">
              Email
            </label>
            <input
              type="text"
              placeholder="enter email address"
              className="outline-none rounded-lg px-2 w-[300px] h-[30px] border-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="" className="text-[18px] text-white font-[500]">
              Password{" "}
            </label>
            <input
              type="text"
              placeholder="enter password"
              className="border-none outline-none rounded-lg px-2 w-[300px] h-[30px]"
            />
          </div>

          <button className="text-white w-[55%] bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:shadow-md hover:shadow-slate-300  duration-300">
            Login
          </button>
        </form>

        <div className="w-[55%] ">
          <button
            className="flex items-center justify-center w-full gap-x-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mb-2"
            onClick={firebase.registerWithGoogle}
          >
            Login with Google <FcGoogle className="text-xl"></FcGoogle>
          </button>
        </div>
      </div>
    </div>
  );
};
