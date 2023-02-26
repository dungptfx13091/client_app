import "./table.css";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableList = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [transactions, setTransactions] = useState("");

  const loginEmail = window.localStorage.getItem("loginEmail");

  useEffect(() => {
    const setLogin = async () => {
      if (loginEmail) setIsLogin(true);
    };
    setLogin();

    // fetch transaction data
    const dataFetch = async () => {
      const transactions = await (
        await fetch(
          `http://localhost:5000/transactions/user?email=${loginEmail}`
        )
      ).json();

      setTransactions(transactions);
    };

    dataFetch();
    console.log(loginEmail, transactions);
  }, []);

  const rows = [
    {
      id: "5njfdh4793nj3",
      user: "Dan",
      hotel: "May De Ville Legend Hotel & Spa",
      room: [304, 305],
      date: "12/09/2022-14/09/2022",
      price: 700,
      method: "Credit Card",
      status: "Booked",
    },
    {
      id: "5n5jf9dh843j53",
      user: "John",
      hotel: "Alagon Saigon Hotel & Spa",
      room: [101, 201],
      date: "1/10/2022-3/10/2022",
      price: 2100,
      method: "Credit Card",
      status: "Booked",
    },
    {
      id: "5nf8djfh7w35t4",
      user: "John",
      hotel: "La Sinfonia del Rey Hotel and Spa",
      room: [801],
      date: "1/09/2022-5/09/2022",
      price: 1500,
      method: "Cash",
      status: "Checkin",
    },
    {
      id: "5n5jf9d54j23b7",
      user: "David",
      hotel: "Alagon Saigon Hotel & Spa",
      room: [201],
      date: "2/09/2022-4/09/2022",
      price: 700,
      method: "Cash",
      status: "Checkin",
    },
    {
      id: "5n5jmeru43i6n3",
      user: "John",
      hotel: "Alagon Saigon Hotel & Spa",
      room: [201],
      date: "9/3/2022-13/3/2022",
      price: 1400,
      method: "Cash",
      status: "Checkout",
    },
    {
      id: "5n543nfenu50m",
      user: "John",
      hotel: "HANOI ROYAL PALACE HOTEL 2",
      room: [101, 103],
      date: "1/1/2020-3/1/2020",
      price: 300,
      method: "Credit Card",
      status: "Checkout",
    },
    {
      id: "5n54n8k65n203v",
      user: "Peter",
      hotel: "HANOI ROYAL PALACE HOTEL 2",
      room: [201],
      date: "9/2/2019-11/2/2019",
      price: 700,
      method: "Credit Card",
      status: "Checkout",
    },
    {
      id: "5n4i92n8jb83f",
      user: "David",
      hotel: "Alagon Saigon Hotel & Spa",
      room: [201],
      date: "9/2/2019-11/2/2019",
      price: 700,
      method: "Credit Card",
      status: "Checkout",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#2f829c" }}>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">User</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Room</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.user}</TableCell>
              <TableCell className="tableCell">{row.hotel}</TableCell>
              <TableCell className="tableCell">
                {row.room.reduce((acc, cur) => {
                  return acc + "," + cur;
                })}
              </TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.price}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
