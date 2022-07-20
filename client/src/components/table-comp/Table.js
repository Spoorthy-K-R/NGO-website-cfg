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
      const response = await axios("http://localhost:8000/api/companies-all/")
      setRows(response.data)
      
    }
    fetchStudent()
  },[])


  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Company ID</TableCell>
            <TableCell className="tableCell">Company Name</TableCell>
            <TableCell className="tableCell">Registerd Address</TableCell>
            <TableCell className="tableCell">Corporate Address</TableCell>
            <TableCell className="tableCell">Company Description</TableCell>
            <TableCell className="tableCell">Company Profile</TableCell>
            <TableCell className="tableCell">Number of Employees</TableCell>
            <TableCell className="tableCell">Quarterly Turnover</TableCell>
            <TableCell className="tableCell">Timestamp</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
            <TableCell className="tableCell">{row.id}</TableCell>

              <TableCell className="tableCell">{row.companyName}</TableCell>
              <TableCell className="tableCell">{row.registeredAddress}</TableCell>
              <TableCell className="tableCell">{row.corporateAddress}</TableCell>
              <TableCell className="tableCell">{row.companyDescription}</TableCell>
              <TableCell className="tableCell">{row.companyProfile}</TableCell>
              <TableCell className="tableCell">{row.numberOfEmployees}</TableCell>
              <TableCell className="tableCell">{row.quarterlyTurnover}</TableCell>
              <TableCell className="tableCell">{row.timestamp}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
