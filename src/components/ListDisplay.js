import React from "react";
import "./ListDisplay.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { faEdit} from '@fortawesome/free-solid-svg-icons'


const ListDisplay = (props) => {
    console.log(props.listOfItems)
    const trashCan = <FontAwesomeIcon icon={faTrash}/>
    const edit = <FontAwesomeIcon icon={faEdit}/>
    const DeleteFunc = (num) =>{
        props.updateItems(props.listOfItems.filter(index => props.listOfItems.indexOf(index) != num))
    }
    console.log("props",props)
    return(
        <div className = "wrapper"> 
            <div className="items">
                {props.listOfItems.map((groceryItem,index) => {
                                console.log(index)
                                return( 
                                <div  className="itemHolder">
                                    <span onClick={()=>DeleteFunc(index)} className="editIcon">{edit}</span>
                                     <p className="item" key={index}>{groceryItem}</p>
                                </div>
                );})}
            </div>
            <div className="prices">
                {props.price.map((priceItem,index) => {
                    
                    return (<div className="priceHolder">

                                <p className="price" key={index}>${priceItem}</p>
                                <span onClick={()=>DeleteFunc(index)} className="trashIcon">{trashCan}</span>

                             </div>)
                })}
            </div>
        </div>
    );
};

export default ListDisplay;