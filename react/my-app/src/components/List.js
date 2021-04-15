import axios from "axios";
import React, { useEffect, useState } from "react";

const List = ({items}) =>{
    const [activeIndex,setactiveIndex] = useState(null);
    const [buttonStatus,setButtonStatus] = useState(0);
    const changeIndex = (i) =>{
        setactiveIndex(i);
    }

    const getConsoleData = () => {
        console.log("my console msg");
        setButtonStatus(buttonStatus+1);
    }

    // useEffect(()=>{
    //     console.log("use Effect rendered " + activeIndex);
    //     return ()=>{
    //         console.log("CLEANUP" + activeIndex);
    //     }
    // },[activeIndex])

    useEffect(() =>{
        (async () => {
            const result = await axios.get('https://en.wikipedia.org/w/api.php',{
                params : {
                    action : "query",
                    list : "search",
                    origin : "*",
                    format : "json",
                    srsearch : "html"
                }
            });
            console.log(result.data.query);
        })()
    },[activeIndex]);



    var acc_data_temp = items.map((item,index) =>{
        const active = index === activeIndex ? 'active': "";
        return <div>
             <div className={`title ${active} `} onClick={()=>{changeIndex(index)}}>
                 <i className="dropdown icon"></i> 
                 {item.title }
            </div> 
            <div className={`content ${active}` }> 
                <p className="transition"> {item.content} </p>
                <p className="transition"> {item.Television} </p>
            </div> 
            </div>;
    });
    return(
        <div>
            <div className="ui styled accordion">
                {acc_data_temp}
            </div>
            {items.length}
        </div>
    )
}


export default List;