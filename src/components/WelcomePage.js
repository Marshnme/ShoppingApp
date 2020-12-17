import React from "react";
import "./WelcomePage.css"
import ListDisplay from "./ListDisplay";
import {useState} from "react";

const WelcomePage = (props) => {
    const [listOfItems, setListOfItems] = useState([]);
    const [price, setPrice] = useState([]);
    const [total, setTotal] = useState([]);
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
    
    const handleAddPrice = (e) =>{
        e.preventDefault();
        if(price.length === 0){
            return;
        }else{
            return setTotal(price.reduce((a,b) => 1*a + 1*b))
        }
        

    }
    console.log("prices", price)
    return(
        <div class = "container"> 
            <header>
                <h1>Grocery Price Calculator!</h1>
            </header>
            <body>
                <div class = "inputSection">
                    <form className="inputParent" onSubmit = {handleSubmit}>
                        <div className="addItemInputs">
                            <div className="inputUnderline">
                                <input className="welcomeInput" type = "text" required onChange = {handleChange} placeholder="Your Item..." value={itemText} ></input>
                            </div>
                            <div className="inputUnderline">
                                <input className="welcomeInput" type = "number" required onChange = {handlePriceChange} placeholder="Price of your item(USD)" value={priceText} ></input>
                            </div>
                            
                            
                        </div>
                        <div className="addItemButton">
                            <button className="buttonStyle" type="submit" onSubmit = {handleSubmit} >Add</button>
                        </div>
                        
                    </form>
                    
                </div>
                
                    <div class="labels">
                        <h3>Items</h3>
                        <h3>Price</h3>
                    </div>
                    <ListDisplay listOfItems={listOfItems} price = {price}></ListDisplay>
            </body>
            <footer className="welcomeFooter">
                <div className="totalContain">
                    <p className = "totalP">${total}</p>
                    <button  className="totalButtonStyle" type="text" onClick={handleAddPrice}>Total</button>
                </div>
                
            </footer>
        </div>
    );
};

export default WelcomePage;