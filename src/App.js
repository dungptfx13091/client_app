import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Booking from "./pages/booking/booking";
import "./App.css";
import TransactionList from "./pages/transactionList/transactionList";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const loginEmail = window.localStorage.getItem("loginEmail");
  useEffect(() => {
    // fetch data
    const setLogin = async () => {
      if (loginEmail) setIsLogin(true);
    };
    setLogin();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/login" element={<Login isLogin={isLogin} />} />
        <Route path="/register" element={<Register isLogin={isLogin} />} />
        <Route path="/hotels" element={<List isLogin={isLogin} />} />
        <Route path="/hotel/:id" element={<Hotel isLogin={isLogin} />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/user/transactions" element={<TransactionList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
