import React from "react";
import "./ListDisplay.css";
import {useState} from "react";
import EditField from "./EditField"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'


const ListDisplay = (props) => {

    const [editing, setEditing] =useState(false)
    console.log("props",props)
    const trashCan = <FontAwesomeIcon icon={faTrash}/>
    const edit = <FontAwesomeIcon icon={faEdit}/>
    const DeleteFunc = (num) =>{
        props.updateItems(props.listOfItems.filter(index => props.listOfItems.indexOf(index) !== num))
        props.updatePrices(props.price.filter(index => props.price.indexOf(index) !== num))
    }

    const UpdateFunc = (num) =>{
        props.listOfItems.map((index) => {
            if(props.listOfItems.indexOf(index) === num){
                console.log("updateme")
                setEditing(true)
            }
        })

        props.price.map((index) => {
            if(props.price.indexOf(index) === num){
                console.log("updateme2")
                setEditing(true)
            }
        })
    }
    
    return(
        <div className = "wrapper"> 
            <div className="items">
                {props.listOfItems.map((groceryItem,index) => {
                                console.log(index)
                                return( 
                                <div  className="itemHolder">
                                    <span onClick={()=>UpdateFunc(index)} className="editIcon">{edit}</span>
                                     <p className="item" key={index}>{editing ? <EditField price={props.price} listOfItems={props.listOfItems} updatePrices={props.updatePrices} updateItems={props.updateItems}></EditField> : groceryItem}</p>
                                </div>
                );})}
            </div>
            <div className="prices">
                {props.price.map((priceItem,index) => {
                    
                    return (<div className="priceHolder">

                                <p className="price" key={index}>${editing ? <EditField price={props.price} listOfItems={props.listOfItems} updatePrices={props.updatePrices} updateItems={props.updateItems}></EditField> : priceItem}</p>
                                <span onClick={()=>DeleteFunc(index)} className="trashIcon">{trashCan}</span>

                             </div>)
                })}
            </div>
        </div>
    );
};

export default ListDisplay;