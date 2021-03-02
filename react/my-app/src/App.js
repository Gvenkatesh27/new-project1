import './App.css';
import Comments from "./components/comments/Comments";
import  React,{ Component , useState} from 'react';
import Search from "./components/comments/search/Search";
import axios from "axios";


class App extends Component{


  APIurl ='https://api.unsplash.com/photos?page=1&query=office&client_id=nJCG928Ha0pnILd7T_EmXwDO45tiHLwktHhZeBs-3Ko';

  loaddata =(q_data) =>{
    axios.get('https://api.unsplash.com/photos?', {
      params: {
      page : 1,
      query : q_data,
      client_id : "nJCG928Ha0pnILd7T_EmXwDO45tiHLwktHhZeBs-3Ko"
      }
    })

    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
  }

  onGetData =(mydata) => {
    console.log(mydata);
    this.loaddata(mydata);
  }


  render(){
    return(
      <div className="App">
        <Search onSubmit={this.onGetData}/>
      </div>
    )
  }
};















// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       pos : [
//         {
//           lat : null,
//           long : null
//         }
//       ],
//       errorMsg : ''
//     }
//     window.navigator.geolocation.getCurrentPosition(position => {
//       console.log(position)
//       this.setState({
//         pos : {
//           lat :position.coords.latitude,
//           long : position.coords.longitude
//         }
//       })
//     },
//       error => {
//         console.log(error)
//         this.setState({
//           errorMsg:error.message
//         })
//       }
//     )
//   }
  
//   componentWillUpdate(){
//     console.log("Component did update called");
//     console.log("done with geolocation");
//   }

//   render() {
//     console.log("Component rerendered");
//     if(!this.state.errorMsg && this.state.pos.lat){
//         return(
//           // <div className="App">
//           //   HELLO YOUR COORDS ARE<br/><br/>
//           //   {console.log(this.state)}
//           //   latitude : {this.state.pos.lat},<br/><br/>
//           //   longitude : {this.state.pos.long}
//           // </div>
//           <Wheather lat={this.state.pos.lat}/>
//         );
//     }     
    
//     if(this.state.errorMsg && !this.state.pos.lat){
//       return <div>Error: {this.state.errorMsg}</div>
//     }

//      return <Loader/>;
//   }
// };
export default App;