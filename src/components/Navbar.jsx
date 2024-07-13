import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import "./Navbar.css";
import { ImBooks } from "react-icons/im";

const Navbar = () => {
  const firebase = useFirebase();
  const [color, setColor] = useState(true);

  const colorChange = () => {
    if (window.scrollY <= 499) {
      setColor(true);
    } else if (window.scrollY >= 500 && window.scrollY < 990) {
      setColor(false);
    } else if (window.scrollY >= 1000 && window.scrollY <= 1500) {
      setColor(true);
    }

    // console.log(window.scrollY);
    // console.log(color);
  };
  window.addEventListener("scroll", colorChange);

  return (
    <div
      className={`w-full bg2 h-[60px]  pb-2 flex justify-around items-center px-8 text-white pt-4 shadow-lg 
     ${color ? "bg2" : "bg1"}`}
    >
      <div className="flex items-center gap-x-4">
      
        <h1 className="text-[20px] font-[700] select-none">Book-Wook</h1>
        <p className="text-3xl ">
          {" "}
          <ImBooks />
        </p>
      </div>

      <div className="flex justify-between text-[17px] w-[50%] items-center">
        <NavLink to={"/"}>
          <p className=" hover:underline">Home</p>
        </NavLink>

        {firebase.isLoggedIn ? (
          <NavLink to={"/listbook"}>
            <p className=" hover:underline">List Books</p>
          </NavLink>
        ) : (
          <NavLink to={"login"}>
            <p className=" hover:underline">List Books</p>
          </NavLink>
        )}

        {firebase.isLoggedIn ? (
          <NavLink to={"/vieworders"}>
            <p className=" hover:underline">View Orders</p>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>
            <p className=" hover:underline">View Orders</p>
          </NavLink>
        )}

        {firebase.isLoggedIn ? (
          <NavLink to={"/userpage"}>
            <p className=" hover:underline">Buy Books</p>
          </NavLink>
        ) : (
          <NavLink to={"/register"}>
            <p className=" hover:underline">Register</p>
          </NavLink>
        )}

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
      </div>
    </div>
  );
};

export default Navbar;
