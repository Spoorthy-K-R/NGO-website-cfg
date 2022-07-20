import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import axios from "axios";



const List = () => {
  const [rows, setRows] = useState([]);
  useEffect(()=>{
    const fetchStudent = async () =>{
      const response = await axios("http://localhost:8000/api/investor-all/")
      setRows(response.data)
      
    }
    fetchStudent()
  },[])


  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Investor ID</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Mobile Number</TableCell>
            <TableCell className="tableCell">Location</TableCell>
            <TableCell className="tableCell">Investment Interest</TableCell>
            <TableCell className="tableCell">Timestamp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.firstName}</TableCell>
              <TableCell className="tableCell">{row.lastName}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.mobile}</TableCell>
              <TableCell className="tableCell">{row.location}</TableCell>
              <TableCell className="tableCell">{row.investment_interest}</TableCell>
              <TableCell className="tableCell">{row.timestamp}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
