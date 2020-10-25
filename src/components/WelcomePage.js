import React from "react";
import "./WelcomePage.css"
import ListDisplay from "./ListDisplay";
import {useState} from "react";

const WelcomePage = (props) => {
    const [listOfItems, setListOfItems] = useState([]);
    const [text , setText] = useState("");
    
    const handleChange = (e) =>{
        e.preventDefault();
        setText([e.target.value]);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setListOfItems([...listOfItems, text]);
    };
    console.log("list of items", listOfItems)
    return(
        <div class = "wrapper"> 
            <header>
                <h1>Grocery Price Calculator!</h1>
            </header>
            <div class = "inputBox">
                <form onSubmit = {handleSubmit}>
                    <button type="submit" onSubmit = {handleSubmit} >Add</button>
                    <input type = "text" onChange = {handleChange} placeholder="Buying an item?" ></input>
                </form>
                
            </div>
            <body>
                <ListDisplay listOfItems={listOfItems}></ListDisplay>
            </body>
        </div>
    );
};

export default WelcomePage;