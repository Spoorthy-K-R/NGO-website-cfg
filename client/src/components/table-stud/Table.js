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
      const response = await axios("http://localhost:8000/api/students-all/")
      setRows(response.data)
      
    }
    fetchStudent()
  },[])


  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">First Name</TableCell>
            <TableCell className="tableCell">Last Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Mobile Number</TableCell>
            <TableCell className="tableCell">Experience</TableCell>
            <TableCell className="tableCell">Interest</TableCell>
            <TableCell className="tableCell">linkedIn</TableCell>
            <TableCell className="tableCell">Location</TableCell>
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
              <TableCell className="tableCell">{row.experience}</TableCell>
              <TableCell className="tableCell">{row.interest}</TableCell>
              <TableCell className="tableCell">{row.linkedIn}</TableCell>
              <TableCell className="tableCell">{row.location}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
