import './App.css';
import Comments from "./components/comments/Comments";
import  React,{ Component , useState} from 'react';
import Search from "./components/comments/search/Search";
import axios from "axios";
import SearchResults from "./components/comments/searchr/serchResults/SearchResults";


class App extends Component{


  state = {
    search_query : null,
    url_link : []
  }


  APIurl ='https://api.unsplash.com/photos?page=1&query=office&client_id=nJCG928Ha0pnILd7T_EmXwDO45tiHLwktHhZeBs-3Ko';

  loaddata =(q_data) =>{
    axios.get('https://api.unsplash.com/photos?', {
      params: {
      page : 1,
      query : q_data,
      client_id : "nJCG928Ha0pnILd7T_EmXwDO45tiHLwktHhZeBs-3Ko"
      }
    })

    .then( response =>{
      console.log(response.data);
      this.setState({url_link : response.data});
      console.log(this.state);
    })
    .catch( error => {
      console.log(error);
    })
    .then(function () {
      // always executed
    }); 
  }

  onGetData =(mydata) => {
    this.setState({search_query : mydata})
    console.log(mydata);
    this.loaddata(mydata);
  }

  html_temp = "";


  load_search_data = () => {
    this.html_temp = this.state.url_link.map(function(v,i){
      // console.log(v);
      var data = <SearchResults img_link={v.urls.regular} name ={v.alt_description}></SearchResults>
      return data;
    });
    return this.html_temp;
  }


  render(){
    var search_display_res ;
    if(this.state.search_query != null){
      search_display_res = <div><h2>Search Results for {this.state.search_query}</h2><SearchResults></SearchResults></div>
    }
    return(
      <div className="ui container">
        <Search onSubmit={this.onGetData}/>
        <div>
          {/* <h2>Search Results for {this.state.search_query}</h2> */}
          {/* <SearchResults></SearchResults> */}
          {/* <hr></hr> */}
          {search_display_res}
          
          <div className="ui three column grid">
            {/* {this.html_temp} */}
            {this.load_search_data()};
          </div>
        </div>      
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