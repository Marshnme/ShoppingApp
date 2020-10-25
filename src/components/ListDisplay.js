import React from "react";
import "./ListDisplay.css"
import {useState} from "react";

const ListDisplay = (props) => {
    console.log("props",props)
    return(
        <div class = "wrapper"> 
            {props.listOfItems.map((groceryItem) => {
                console.log("groceryItem", groceryItem)
                return <p>{groceryItem}</p>
            })}
        </div>
    );
};

export default ListDisplay;