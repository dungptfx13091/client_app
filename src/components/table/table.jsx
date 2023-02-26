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
  const [transactions, setTransactions] = useState([]);
  const loginEmail = window.localStorage.getItem("loginEmail");

  useEffect(() => {
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
  }, []);

  const rows = transactions.map((trans, id) => {
    return {
      id: id + 1,
      hotel: trans.hotel,
      room: trans.room,
      date: `${trans.dateStart}-${trans.dateEnd}`,
      price: trans.price,
      method: trans.payment,
      status: trans.status,
    };
  });

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#2f829c" }}>
            <TableCell className="tableCell">ID</TableCell>
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
