import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";

export const Card = ({ book, link }) => {
  const firebase = useFirebase();
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    firebase.getImageURL(book.imageURL).then((url) => setUrl(url));
  }, []);
  return (
    <div className="h-[400px] p-3 mx-4 rounded-lg flex justify-center mt-4">
      <div className=" text-white shadow-2xl bg-[#855CBD] w-[300px]  flex flex-col justify-center rounded-lg pb-2 ">
        <div className="mt-2 flex justify-center h-[150px] ">
          <img
            alt="book cover"
            src={url}
            width={250}
            className=" object-cover rounded-[10px]"
          />
        </div>

        <div className="flex flex-col px-4 py-4">
          <p className="font-[500] text-[18px]">
            Book Name : <span className=" capitalize ">{book.name}</span>
          </p>
          <p className="font-[500] text-[18px]">
            Rs : <span className="capitalize">{book.price}</span>
          </p>
          <p className="font-[500] text-[18px]">
            Seller : <span className="capitalize ">{book.userName}</span>
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            class="w-[180px] cursor-pointer flex justify-between bg-black px-4 py-3 rounded-xl text-white tracking-wider shadow-xl hover:scale-105 duration-500 hover:ring-1 font-mono"
            onClick={() => navigate(link)}
          >
            Get Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5 animate-bounce mt-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
