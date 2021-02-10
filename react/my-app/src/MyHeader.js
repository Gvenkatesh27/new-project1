import { React,Component } from "react";

class MyHeader extends Component {
    render() {
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        width : "100%"
      };
      const myhead = {
        color : "black",
        backgroundColor : "grey",
        padding : "10px"
      };
      return (
        <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p style={myhead}>Add a little style!</p>
        </div>
      );
    }
  }
  
  export default MyHeader;