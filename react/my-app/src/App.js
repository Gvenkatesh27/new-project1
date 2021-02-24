import './App.css';
import Comments from "./components/comments/Comments";
import Approval from "./components/comments/approval/Approval";
import faker from "faker";
import  React,{ Component , useState} from 'react';
import Loader from './components/comments/loader/Loader';
import Wheather from './components/comments/wheather/Wheather';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      pos : [
        {
          lat : null,
          long : null
        }
      ],
      errorMsg : ''
    }
    window.navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      this.setState({
        pos : {
          lat :position.coords.latitude,
          long : position.coords.longitude
        }
      })
    },
      error => {
        console.log(error)
        this.setState({
          errorMsg:error.message
        })
      }
    )
  }
  
  componentWillUpdate(){
    console.log("Component did update called");
    console.log("done with geolocation");
  }

  render() {
    console.log("Component rerendered");
    if(!this.state.errorMsg && this.state.pos.lat){
        return(
          // <div className="App">
          //   HELLO YOUR COORDS ARE<br/><br/>
          //   {console.log(this.state)}
          //   latitude : {this.state.pos.lat},<br/><br/>
          //   longitude : {this.state.pos.long}
          // </div>
          <Wheather lat={this.state.pos.lat}/>
        );
    }     
    
    if(this.state.errorMsg && !this.state.pos.lat){
      return <div>Error: {this.state.errorMsg}</div>
    }

     return <Loader/>;
  }
};
export default App;