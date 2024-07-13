import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Card } from "../components/Card";

export const UserPage = () => {
  const firebase = useFirebase();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    firebase.listBooks().then((bookdata) => setBooks(bookdata.docs));
  }, []);

  return (
    <div className="w-screen mt-[50px]  bg-[#A080CC] overflow-x-hidden">
      <div className="w-screen flex justify-center mt-12">
        {books.length == 0 ? (
          <p className="text-[20px] font-[500] mt-4 text-white text-center">
            No books found...
          </p>
        ) : (
          <p></p>
        )}
      </div>
      <div className="grid grid-cols-3 mb-[100px]">
        {books.map((book) => {
          return (
            <Card
              book={book.data()}
              id={book.id}
              key={book.id}
              link={`/book/description/${book.id}`}
            ></Card>
          );
        })}
      </div>
    </div>
  );
};
