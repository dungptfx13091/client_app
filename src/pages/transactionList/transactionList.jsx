import React from "react";
import { useState, useEffect } from "react";
import "./transactionList.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/table";
import Footer from "../../components/footer/Footer";

const TransactionList = () => {
  const [isLogin, setIsLogin] = useState(false);

  const loginEmail = window.localStorage.getItem("loginEmail");

  useEffect(() => {
    const setLogin = async () => {
      if (loginEmail) setIsLogin(true);
    };
    setLogin();
  }, []);

  return (
    <div>
      <Navbar isLogin={isLogin} />
      <Header type="list" />
      <div className="container">
        <div className="tableContainer">
          <div className="titleContainer">
            <h1>Your Transactions</h1>
          </div>
          <Table />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TransactionList;
