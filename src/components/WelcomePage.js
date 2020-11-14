import React from "react";
import "./WelcomePage.css"
import ListDisplay from "./ListDisplay";
import {useState} from "react";

const WelcomePage = (props) => {
    const [listOfItems, setListOfItems] = useState([]);
    const [price, setPrice] = useState([]);
    const [itemText , setItemText] = useState("");
    const [priceText , setPriceText] = useState("");
    
    const ClearText = () => {
        setItemText("");
        setPriceText("");
    }
    const handleChange = (e) =>{
        e.preventDefault();
        setItemText([e.target.value]);
    };
    const handlePriceChange = (e) =>{
        e.preventDefault();
        setPriceText([e.target.value]);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setListOfItems([...listOfItems, itemText]);
        setPrice([...price , priceText]);
        ClearText()
    };
    console.log("list of items", listOfItems)
    return(
        <div class = "container"> 
            <header>
                <h1>Grocery Price Calculator!</h1>
            </header>
            <div class = "inputBox">
                <form onSubmit = {handleSubmit}>
                    <button type="submit" onSubmit = {handleSubmit} >Add</button>
                    <input type = "text" onChange = {handleChange} placeholder="Buying an item?" value={itemText} ></input>
                    <input type = "text" onChange = {handlePriceChange} placeholder="Price of your item..." value={priceText} ></input>
                </form>
                
            </div>
            <body>
                <div class="labels">
                    <h3>Items</h3>
                    <h3>Price</h3>
                </div>
                <ListDisplay listOfItems={listOfItems} price = {price}></ListDisplay>
            </body>
            <footer>
                <h3>Total</h3>
                <h3>ADD</h3>
            </footer>
        </div>
    );
};

export default WelcomePage;