import './App.css';
import Comments from "./components/comments/Comments";
import Approval from "./components/comments/approval/Approval";
import faker from "faker";
import  React,{ Component , useState} from 'react';

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
      }
    )
  }
  
  

  render() {
        return(
          <div className="App">
          hello your coords<br/><br/>
          {console.log(this.state)}
          latitude : {this.state.pos.lat},<br/><br/>
          longitude : {this.state.pos.long},
          </div>
        );
  }
}
export default App;