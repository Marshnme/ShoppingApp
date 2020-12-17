import React from "react";
import "./ListDisplay.css"
import {useState} from "react";

const ListDisplay = (props) => {
    console.log("props",props)
    return(
        <div class = "wrapper"> 
            <div class="item">
                {props.listOfItems.map((groceryItem) => {
                                console.log("groceryItem", groceryItem)
                                return <p>{groceryItem}</p>
                            })}
            </div>
            <div class="price">
                {props.price.map((priceItem) => {
                    console.log("priceItem", priceItem)
                    return <p>${priceItem}</p>
                })}
            </div>
        </div>
    );
};

export default ListDisplay;