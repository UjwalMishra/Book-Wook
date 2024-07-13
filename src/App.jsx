// import { useState } from "react";
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserPage } from "./pages/UserPage";
import Navbar from "./components/Navbar";
import { BookList } from "./pages/BookList";
import { BookDesc } from "./pages/BookDesc";
import { ViewOrders } from "./pages/ViewOrders";
import { Orders } from "./pages/Orders";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative ">
       <div className=" fixed z-50 w-full h-fit">
        <Navbar/>
       </div>
      
       
        <div className="flex h-fit">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/register" element={<Register></Register>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/userpage" element={<UserPage></UserPage>} />
            <Route path="/listbook" element={<BookList></BookList>} />
            <Route path="/book/description/:bookId" element={<BookDesc />} />
            <Route path="/vieworders" element={<ViewOrders></ViewOrders>}/>
            <Route path="/book/orders/:bookId" element={<Orders></Orders>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
