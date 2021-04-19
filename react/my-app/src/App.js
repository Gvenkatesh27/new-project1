import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import './App.css';
// import { List } from "@material-ui/core";
import List from "./components/List";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize : "large",
    fontFamily : "italic"
  },
  body: {
    fontSize: "large",
    fontFamily : "italic"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const mystyle = {
  color: "black",
  backgroundColor: "white",
  // padding: "10px",
  fontFamily: "italic",
  float : "right"

};

const mystyles = {
  backgroundColor : "orangered",
  color : "white"
}


const App = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const getProductData = async () => {
    try {
      // const data = await axios.get("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=pavan"
      const data = await axios.get("https://jsonplaceholder.typicode.com/users"
      );
      console.log(data.data);
      setProduct(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="App">
      <center><h1>REACTJS</h1></center>
      {/* {product.map((item) => {
        return <p>{item.id}-- {item.title}-- {item.price}</p>
      })} */}
      <input
        type="text"
        placeholder="Search here" style={mystyle}  
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>City</StyledTableCell>
              <StyledTableCell>CompanyName</StyledTableCell>
              <StyledTableCell>More Info Links</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
              .map((item) => {
                return (
                  <StyledTableRow key={item.id}>
                    <StyledTableCell component="th" scope="row">
                      {item.id}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.email}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.phone}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.address.city}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {item.company.name}
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      <button style={mystyles}>More Info</button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })};
          </TableBody>
        </Table>
      </TableContainer>
    </div >
  );
};
export default App;





