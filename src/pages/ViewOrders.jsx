import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
// import { BookList } from "./BookList";
import { Card } from "../components/Card";

export const ViewOrders = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (firebase.isLoggedIn) {
      firebase
        .fetchBookListedByYou(firebase.user.uid)
        .then((books) => setBooks(books.docs));
    }
  }, [firebase]);
  // console.log(books);

  if (!firebase.isLoggedIn) return <h1>Log in first</h1>;

  return (
    <div className="w-full h-screen bg-[#A080CC] ">
      <h1 className="text-[24px] font-[700] text-white mt-24 text-center">
        Books Listed By You
      </h1>
      <div className="w-full h-full bg-[#A080CC]">
        <div>
          {books.length == 0 ? (
            <div className="text-center">
              <p className="text-[24px] font-[500] mt-4 text-white">Empty...</p>
              <p className="text-[18px] mt-8 font-[500] text-white ">Add your book first</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>

        <div className="w-full bg-[#A080CC] grid grid-cols-3 mt-4">
          {books.map((book) => (
            <Card
              id={book.id}
              key={book.id}
              book={book.data()}
              link={`/book/orders/${book.id}`}
            ></Card>
          ))}
        </div>
      </div>
    </div>
  );
};
