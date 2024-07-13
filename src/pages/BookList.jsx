import React from "react";
import { useFirebase } from "../context/Firebase";

export const BookList = () => {
  const firebase = useFirebase();

  const submitHandler = async (evt) => {
    evt.preventDefault();

    const bookName = evt.target[0].value;
    const isbnNumber = evt.target[1].value;
    const userName = evt.target[2].value;
    const price = evt.target[3].value;
    const condition = evt.target[4].value;
    const bookCover = evt.target[5].files[0];

    firebase.addBookList(bookName, isbnNumber, price, userName, bookCover,condition);
  };
  return (
    <div className="w-screen h-screen bg-[#A080CC] flex justify-center items-center">
      <div className="flex flex-col justify-center gap-y-6 items-center w-[40%] h-[85%] rounded-lg bg-[#855CBD] shadow-2xl mt-12">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-[24px] font-[700] text-white">Book Store</h1>
          <h2 className="text-[20px] font-[700]">List your books</h2>
        </div>

        <form
          action=""
          className="flex flex-col items-center  w-full space-y-3"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col">
            <label htmlFor="" className="text-white font-[500]">
              Book Name
            </label>
            <input
              required
              type="text"
              placeholder="enter name of your book"
              className="border outline-none rounded-lg px-2 w-[300px] h-[30px]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-white  font-[500]">
              ISBN Number
            </label>
            <input
              type="text"
              required
              placeholder="enter books's ISBN number"
              className="outline-none rounded-lg px-2 w-[300px] h-[30px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-white font-[500]">
              Seller's Name
            </label>
            <input
              required
              type="text"
              placeholder="enter name"
              className=" outline-none rounded-lg px-2 w-[300px] h-[30px]"
            />
          </div>

          <div className="flex items-center gap-x-2">
            <div className="flex flex-col pb-1">
              <label htmlFor="" className="text-white font-[500]">
                Price
              </label>
              <input
                required
                type="text"
                placeholder="enter price"
                className=" outline-none rounded-md px-2 w-[150px] h-[30px]"
              />
            </div>
            <div className="flex flex-col pb-1">
              <label htmlFor="" className="text-white font-[500]">
                Condition
              </label>
              
              <select name="Condition" id="" className=" outline-none rounded-md px-2 w-[150px] h-[30px]">
              <option value="New">New</option>
              <option value="Very Good">Very Good</option>
              <option value="Acceptable">Acceptable</option>
              <option value="Poor">Poor</option>

              </select>

            </div>
          </div>

          <div className=" relative border hover:bg-white  rounded-xl hover:text-[#A080CC]">
            <input
              type="file"
              className="cursor-pointer font-[500] mx-1 outline-none py-1 rounded-lg text-white duration-200 hover:text-[#A080CC]"
              id="picfile"
              required
            />
          </div>
          <button className="text-white w-[55%] bg-black focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:shadow-md hover:shadow-slate-300  duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
