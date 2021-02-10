import logo from './logo.svg';
import './App.css';
import People from './People';
import Users from './Users';
import Person from './components/Person';
import React,{Component, useState} from 'react';
import MyHeader from './MyHeader';
import Input from './Input';



const App = () => {
  const [userstate,setuserstate] = useState(
    {
    user_deatils : [
      { "name" : "suresh", "mobile" : "7674905234"},
      { "name" : "ranjith", "mobile" : "7674905234"},
      { "name" : "pavan", "mobile" : "7674905234"}
    ],
    show_data : false
  }
  );

  var style ={
    backgroundColor : "red",
    color:"white"
  }

const buttonclick = () =>{
    setuserstate({
      user_deatils : [
        { "name" : "kumar", "mobile" : "7674905234"},
        { "name" : "saipav", "mobile" : "7674905234"},
        { "name" : "kalyan", "mobile" : "7674905234"}
      ],
      show_data : true
    })
  }

  const deleteData = (i) => {
    console.log(i);
    var myuser = userstate.user_deatils;
    myuser.splice(i,1);
    setuserstate({
      user_deatils:myuser
    })
    console.log(userstate.user_deatils);
  }

  let newperson = "";
  // if(userstate.show_data === true){
    newperson = (
      // <Person name = "mounisha" mobile = "123456789"/>
      <div>
        {userstate.user_deatils.map((v,i) => {
          return<Person name ={v.name} mobile ={v.mobile} key= {i} click = {() => deleteData(i)}/>;
        })}
      </div>
    )
  // }

  var button_classes = ["hide"];
  if(userstate.user_deatils.length <=0){
    button_classes.splice(0,1);
    button_classes.push("show");
  }

    return(
      <div className="App">
      {/* <Person name ={userstate.user_deatils[0].name} mobile={userstate.user_deatils[0].mobile} />
      <Person name ={userstate.user_deatils[1].name} mobile={userstate.user_deatils[1].mobile} />
      <Person name ={userstate.user_deatils[2].name} mobile={userstate.user_deatils[2].mobile} /> */}
      <button className="btn">click this button</button>
      <button  style ={style} onClick = {buttonclick}>showdata</button>
      <p className={button_classes.join(" ")}>No data found</p>
      {newperson}
    </div>
    );
}

export default App;