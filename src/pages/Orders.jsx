import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

export const Orders = () => {
  const params = useParams();
  const firebase = useFirebase();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    firebase.orderDetails(params.bookId).then((order) => setOrders(order.docs));
  }, []);

  return (
    <div className="w-full h-screen flex ">
      {orders.map((order) => {
          return (
            <div key={order.id} className="bg-[#A080CC] w-screen h-screen ">
              <div className="flex mt-[100px] pl-8 h-full w-full justify-center bg-[#A080CC]">
                <div className="border bg-[#855CBD] h-[150px] flex flex-col justify-center w-[350px] rounded-[20px] pl-2 shadow-2xl text-white">
                  <p className="capitalize"> customer name : {order.data().userName}</p>

                  <p className="capitalize">quantity : {order.data().quantity}</p>

                  <p>Customer Email : {order.data().email}</p>
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};
