import { React,Component } from "react";

class Input extends Component {
        render() {
          return (
            <form>
              <h1>Hello</h1>
              <p>REACTJS FORMS</p>
              <input type="text" placeholder="name:"/><br/>
              <input type="text" placeholder="mobile:"/><br/>
              <input type="text" placeholder="Address:"/>
            </form>
          );
        }
      }
      
export default Input;