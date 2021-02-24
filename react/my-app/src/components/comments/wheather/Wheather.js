import React from "react";



const getCurSes = (lat,month) => {
    console.log(lat,month);
    if(month>2 && month<9){
        return lat>0 ? 'summer' : 'winter'
    }
    else{
        return lat>0 ? 'winter' : 'summer'
    }
}

 const Wheather = (props) =>{
     var ses = getCurSes(props.lat,new Date().getMonth());
     var text = ses == 'winter' ? "IT IS VERY COLD" : "IT IS VERY HOT";
    // console.log(myses);
     return(
         <div>
            {text}
         </div>
     )
 }
  export default Wheather;