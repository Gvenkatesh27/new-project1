import React, { Component } from "react";
import {connect} from 'react-redux';
import {createAccount} from '../action';

class Invest extends Component{

    renderList(){
        return this.props.accounts.map((e,i) =>  {
            return (
                <div key = {e.name+""+i}>
                    {e.name} {e.amount}
                </div>
            )
        })
    }
    render(){
        return(
            <div>
            <div>Invest Component</div>
            <button onClick={()=>this.props.createAccount('bob',100)}>Add Invest</button>
            <h2>Investers  list</h2>
            <div>
                {this.renderList()}
            </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state);
    return state;
}
 
export default connect(mapStateToProps,{createAccount})(Invest);