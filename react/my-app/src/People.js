import { React,Component } from "react";

class People extends Component{
    componentWillMount(){
        console.log("hai babe");
    }
    render(){
        console.log("hai baby");
        return(
            <h2>footer bar</h2>
        )
    }

    componentDidMount(){
        console.log("hai sweetheart");
    }
}

export default People;