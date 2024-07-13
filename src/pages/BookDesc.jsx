import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

export const BookDesc = () => {
  const firestore = useFirebase();
  const params = useParams();
  // console.log(params);
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    firestore
      .getBookDescbyId(params.bookId)
      .then((value) => setData(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imgURL = data.imageURL;
      firestore.getImageURL(imgURL).then((url) => setURL(url));
    }
  }, [data]);

  const orderBook = async () => {
    const result = await firestore.placeOrder(params.bookId, qty);
    // console.log("Order : ",result);
  };

  if (data == null) return <h1>Loading...</h1>;

  return (
    <div className="w-full h-screen p-8  bg-[#A080CC] flex justify-evenly items-center">
      <div className="flex bg-[#855CBD] mt-8  h-fit p-4 px-8 rounded-[20px] shadow-gray-700 shadow-2xl">
        <div className="mt-2 relative bg-white rounded-xl">
          <img
            alt="book cover"
            src={url}
            width={500}
            className=" object-cover h-[300px] rounded-xl"
          />

          <div className="absolute w-full h-[50px] flex items-center pl-4 bg-yellow-400 bottom-0 rounded-b-xl">
            <p className=" text-[24px] font-[700] capitalize">
              Book Name : <span className="text-green-600">{data.name}</span>
            </p>
          </div>
        </div>

        <div className="pt-4 pl-4 flex flex-col items-start justify-center">
          <p className=" text-[20px] font-[700] ">
            Book ISBN number :{" "}
            <span className="text-white">{data.isbn}</span>
          </p>

          <p className=" text-[20px] font-[700] ">
            Seller : <span className="text-white">{data.userName}</span>
          </p>

          <p className=" text-[20px] font-[700] ">
            Email : <span className="text-white">{data.email}</span>
          </p>

          <p className=" text-[20px] font-[700] ">
            Condition :{" "}
            <span className="text-white">{data.condition}</span>
          </p>

          <p className=" text-[20px] font-[700] ">
            Price : <span className="text-white">Rs {data.price}</span>
          </p>

          <form action="" className=" pt-1 text-[18px] font-[500]">
            <label htmlFor="">Set Quantity : </label>
            <input
              type="number"
              className="pl-2 ml-2 w-[50px] outline-none rounded-md"
              min={1}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </form>

          <div className="flex justify-center w-[270px] mt-4">
            <button
              class="relative shadow-xl px-8 py-2 rounded-md bg-white isolation-auto z-10 border-black font-semibold
              before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-black hover:text-white before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-500"
              onClick={orderBook}
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
