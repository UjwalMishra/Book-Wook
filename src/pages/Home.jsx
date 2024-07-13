import React from "react";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";

export const Home = () => {
  const firebase = useFirebase();
  return (
    <div className="w-screen relative">
      <div className="bg-[#A080CC]  w-full absolute -z-1">
        <div className="bg-[#6B30E4] rounded-b-[70px]">
          {/* 1st section  */}
          <div
            className="bg-[#A080CC] relative w-full h-[550px] py-4 rounded-b-[70px] shadow-2xl"
            id="home"
          >
            <div className=" flex flex-col w-full items-center pt-12">
              <div className="text-white w-full flex justify-evenly items-center text-[40px] font-semibold leading-[45px] select-none">
                <div className="flex justify-center items-center">
                  <img src="/images/hs1.jpg" width={400} alt="" />
                </div>
                <div>
                  <p className="text-center">Unlocking Knowledge</p>
                  <p className="text-center">and</p>
                  <p className="text-center">Imagination</p>
                </div>
              </div>
              <div className="text-white mt-8 text-[20px] select-none">
                <p>
                  Reading books enriches the mind, fuels the imagination, and
                  open doors to endless knowledge and possibilities.
                </p>
              </div>
              <div className="my-8">
                <button class="relative z-10 py-2 px-8 text-black text-[18px] font-semibold nded-full overflow-hidden bg-white rounded-full transition-all duration-400 ease-in-out hover:scale-105 hover:text-white shadow-2xl active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#926EC5] border before:transition-all duration-1000 hover:shadow-2xl before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 ">
                  <a href="#buysell">Get Started</a>
                </button>
              </div>
            </div>
          </div>
          {/* 2nd section */}
          <div
            className="w-full h-[500px] py-4 bg-[#6B30E4] rounded-b-[70px]"
            id="abtus"
          >
            <div className="w-full flex  justify-center items-center">
              <div className="text-white w-[50%] select-none">
                <h2 className="text-[50px] font-semibold">About</h2>
                <p className="text-[30px] font-semibold">Book-Wook</p>
                <p className="text-[20px] mt-8">
                  Welcome to Book-Wook, the premier online destination for
                  buying and selling books! Whether you're looking to add to
                  your personal library or find a new home for your pre-loved
                  books, Book-Wook offers a seamless and user-friendly platform
                  for all your book trading needs.
                </p>
              </div>
              <div className="">
                <img src="/images/abt.png" width={500} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full h-[550px] bg-[#A080CC] rounded-b-[70px] py-4"
          id="buysell"
        >
          <div className="flex justify-center items-center w-full h-full pt-[50px]">
            <div className="bg-[#FFEFE0] flex justify-between items-center px-8 h-[90%] rounded-[30px] w-[80%]">
              <div className="w-[45%]">
                <img src="/images/card.png" width={350} alt="" />
              </div>
              <div className="bg-[#FAB8C4] h-[90%] w-full rounded-[30px] flex flex-col justify-around px-8 pt-8 items-center">
                <div className="text-[35px] font-bold w-[90%] select-none text-gray-800">
                  <p>Book-Wook</p>
                </div>
                <div className=" list-item select-none">
                  <ul className=" list-disc text-gray-700">
                    <li className="mb-2 font-[500]">
                      Find books in all genres, from classics to bestsellers.
                      Each listing has pictures and descriptions to help you
                      choose.
                    </li>

                    <li className="font-[500]">
                      Got books you no longer need? List them on Book-Wook! Just
                      add details, upload photos, and set your price. Our
                      platform connects you with buyers quickly.
                    </li>
                  </ul>
                </div>

                <div className="flex justify-around w-full">
                  <div>
                    {firebase.isLoggedIn ? (
                      <NavLink to={"/userpage"}>
                        <button class="relative py-2 px-3 text-black text-[18px] font-semibold nded-full overflow-hidden bg-white rounded-xl transition-all duration-400 ease-in-out hover:scale-105 hover:text-white shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#000] border before:transition-all before:duration-500 hover:shadow-2xl before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0">
                          Buy Books
                        </button>
                      </NavLink>
                    ) : (
                      <NavLink to={"/login"}>
                        <button class="relative py-2 px-3 text-black text-[18px] font-semibold nded-full overflow-hidden bg-white rounded-xl transition-all duration-400 ease-in-out hover:scale-105 hover:text-white shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#000] border before:transition-all before:duration-500 hover:shadow-2xl before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0">
                          Buy Books
                        </button>
                      </NavLink>
                    )}
                  </div>

                  <div>
                    {firebase.isLoggedIn ? (
                      <NavLink to={"/listbook"}>
                        <button class="relative py-2 px-3 text-black text-[18px] font-semibold nded-full overflow-hidden bg-white rounded-xl transition-all duration-400 ease-in-out hover:scale-105 hover:text-white shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#000] border before:transition-all before:duration-500 hover:shadow-2xl before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0">
                          Sell Books
                        </button>
                      </NavLink>
                    ) : (
                      <NavLink to={"/login"}>
                        <button class="relative py-2 px-3 text-black text-[18px] font-semibold nded-full overflow-hidden bg-white rounded-xl transition-all duration-400 ease-in-out hover:scale-105 hover:text-white shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-[#000] border before:transition-all before:duration-500 hover:shadow-2xl before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0">
                          Sell Books
                        </button>
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer  */}
        <div className="h-[300px] w-full bg-[#6B30E4] rounded-b-[70px] py-4 mb-1">
          <div className="flex w-full justify-center items-center gap-x-[20px] p-[20px]">
            <div className="w-[60%] border border-[#C2AFDD] h-[200px] rounded-[20px] flex   p-8 justify-around">
              <div className="flex flex-col select-none">
                <div className="flex items-center gap-x-4">
                  <p className="text-white text-[25px] font-[500]">Book-Wook</p>
                  <p className="text-2xl text-white">
                    <VscBook />
                  </p>
                </div>
                <p className="text-[18px] text-white font-[500] mt-4">
                  Contact Us :{" "}
                </p>
                <div className="mt-2 flex gap-x-2">
                  <button className="text-2xl bg-white p-1 rounded-full hover:scale-110">
                    {" "}
                    <a href="https://github.com/UjwalMishra" target="_blank">
                      <FaGithub />
                    </a>
                  </button>

                  <button className="text-2xl bg-white p-1 rounded-full hover:scale-110">
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/ujwal-mishra-9964572a7/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </button>

                  <button className="text-2xl bg-white p-1 rounded-full hover:scale-110">
                    {" "}
                    <a
                      href="https://www.instagram.com/mishrax_?igsh=aGtodzVjejhwMGJz"
                      target="_blank"
                    >
                      {" "}
                      <FaInstagram />
                    </a>
                  </button>
                </div>
              </div>
              <div className="text-white flex flex-col justify-center">
                <h2 className="text-[18px] font-[500] select-none">
                  Home Page
                </h2>
                <div className="my-2">
                  <p className=" hover:underline">
                    <a href="#home">Home</a>
                  </p>
                  <p className=" hover:underline">
                    <a href="#abtus">About Us</a>
                  </p>
                  <p className=" hover:underline">
                    <a href="#buysell">Buy Books</a>
                  </p>
                  <p className=" hover:underline">
                    <a href="#buysell">Sell Books</a>
                  </p>
                </div>
              </div>
              <div className="text-white flex flex-col justify-center">
                <h2 className="text-[18px] font-[500] select-none">Navigate</h2>
                <div className="my-2">
                  <NavLink to={"/"}>
                    <p className=" hover:underline">Home</p>
                  </NavLink>

                  {firebase.isLoggedIn ? (
                    <NavLink to={"/listbook"}>
                      <p className=" hover:underline">List Books</p>
                    </NavLink>
                  ) : (
                    <NavLink to={"login"}>List Books</NavLink>
                  )}

                  <NavLink to={"/vieworders"}>
                    <p className=" hover:underline">View Orders</p>
                  </NavLink>

                  {firebase.isLoggedIn ? (
                    <NavLink to={"/"}>
                      <button onClick={firebase.logOut}>
                        <p className=" hover:underline">Logout</p>
                      </button>
                    </NavLink>
                  ) : (
                    <NavLink to={"login"}>
                      <p className=" hover:underline">Login</p>
                    </NavLink>
                  )}

                  <NavLink to={"/register"}>
                    <p className=" hover:underline">Register</p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="w-[20%] h-[200px] border border-[#C2AFDD] rounded-[20px] flex flex-col justify-center items-center select-none">
              <p className="text-white pb-4 font-[500]">Thanks for visiting</p>
              <p className="text-white">
                Designed by :<br />{" "}
                <span className="font-semibold  text-[20px]">Ujwal Mishra</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
