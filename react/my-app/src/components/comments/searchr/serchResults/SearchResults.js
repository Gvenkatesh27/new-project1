import React from "react";
import "./SerchResults.css";

const SearchResults = props => {
    return (
    <div className="column">
            <div className="ui fluid card">
                <div className="image">
                    <img src={props.img_link}    className="res_img"/>
                </div>
                <div className="content">
                    <a className="header">{props.name}</a>
                </div>
            </div>
        </div>

    )
}

export default SearchResults;