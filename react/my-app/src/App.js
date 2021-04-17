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
  },
  body: {
    fontSize: 14,
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




// const list = [
//   {
//     title: "kani",
//     content: "cook with comali 2",
//     Television : "vijaytv"
//   },
//   {
//     title: "Ashwin kumar",
//     content: "cook with comali 2",
//     Television :"vijaytv"
//   },
//   {
//     title: "shakilla",
//     content: "cook with comali 2",
//     Television : "vijaytv"
//   }
// ];
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <List items={list} />
//       </div>
//     )
//   }
// }

// const App = () => {
//   const [count, newCount] = useState(0);
//   const incCount = () => {
//     console.log("button clicked");
//     newCount(count+1);
//   }
//   return (
//     <div>
//       <div>
//         <button onClick={() => incCount()}>Inc Count</button>
//       </div>
//       <div>
//         My count value = {count}
//       </div>
//     </div>
//   )
// }









const App = () => {
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    try {
      // const data = await axios.get("https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=pavan"
      const data = await axios.get("https://fakestoreapi.com/products/category/jewelery"
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
      <h1>hello world</h1>
      {/* {product.map((item) => {
        return <p>{item.id}-- {item.title}-- {item.price}</p>
      })} */}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
            <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Title</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Description</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product.map((item) => {
              return (
                <StyledTableRow key ={item.id}>
                  <StyledTableCell component="th" scope="row">
                    {item.id}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.title}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.price}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.description}
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





