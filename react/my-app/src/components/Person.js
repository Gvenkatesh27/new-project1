import {  React  } from "react";

const Person = (props) => {
    return(
        <div>
            <p onClick ={props.click}>hello react is my name {props.name} and my mobile no is {props.mobile}</p>
            <div className="center">
                <div className="mydata">
                    hello world
                </div>
            </div>
            </div>
    )
}

export default Person;