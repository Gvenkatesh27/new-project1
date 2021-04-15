import React, { Component } from "react";
import './App.css';
import Usestyles from "./components/Usestyles";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Product from "./components/Product";
import Usestyle from "./components/Usestyle";
// import { List } from "@material-ui/core";
import List from "./components/List";


const list = [
  {
    title: "kani",
    content: "cook with comali 2",
    Television : "vijaytv"
  },
  {
    title: "Ashwin kumar",
    content: "cook with comali 2",
    Television :"vijaytv"
  },
  {
    title: "shakilla",
    content: "cook with comali 2",
    Television : "vijaytv"
  }
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <List items={list} />
      </div>
    )
  }
}

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




// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//       <Usestyles/>
//       <Usestyle/>
//       </div>
//     )
//   }
// }


// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,
//     }
//   }

//   componentDidMount() {
//     fetch('https://fakestoreapi.com/products/category/jewelery')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json,
//         })
//       });
//   }

//   render() {

//     var { isLoaded, items } = this.state;
//     if (!isLoaded) {
//       return <div>Loading...</div>;
//     }
//     else {
//       return (
//         <div className="App">
//           <Usestyles></Usestyles>
//           {/* <Product/> */}
//           <ul>
//               {items.map(item => (
//               <li Id ={item.id}>
//                 <table Id ={item.id}>
//                 Title : {item.title} | Price : {item.price} | Description : {item.description} | Category : {item.category} | Image : {item.image}
//                 </table>
//               </li>
//               ))};
//             </ul>
//         </div>
//       );
//     }
//   }
// }


export default App;





