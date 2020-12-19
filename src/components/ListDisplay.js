import React from "react";
import "./ListDisplay.css"
import {useState} from "react";

const ListDisplay = (props) => {
    // console.log("props",props)
    return(
        <div className = "wrapper"> 
            <div className="item">
                {props.listOfItems.map((groceryItem) => {
                                
                                return <p>{groceryItem}</p>
                            })}
            </div>
            <div className="price">
                {props.price.map((priceItem) => {
                    
                    return <p>${priceItem}</p>
                })}
            </div>
        </div>
    );
};

export default ListDisplay;