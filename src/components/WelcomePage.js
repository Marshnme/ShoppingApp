import React, { useEffect } from "react";
import "./WelcomePage.css"
import ListDisplay from "./ListDisplay";
import {useState} from "react";

const WelcomePage = () => {

    // NOTES FOR IMPROVMENTS
    //save to local storage on item add not total calculation.
    // include edit functionality
    // clear comments/make notes

   
    const [listOfItems, setListOfItems] = useState([]);
    const [price, setPrice] = useState([]);
    const [addedUp, setAddedUp] = useState([]);
    const [itemText , setItemText] = useState("");
    const [priceText , setPriceText] = useState("");


    useEffect(() => {
        
        if(localStorage.getItem('itemState') == null){
            localStorage.setItem('itemState', JSON.stringify(listOfItems));
            localStorage.setItem('priceState', JSON.stringify(price));
            localStorage.setItem('totalState', JSON.stringify(addedUp));
        }else{    
            setListOfItems(JSON.parse(localStorage.getItem('itemState')));  
            setPrice(JSON.parse(localStorage.getItem('priceState'))); 
            setAddedUp(JSON.parse(localStorage.getItem('totalState')));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

   
    

    
    
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
        ClearText();
        // const priceReduced = price.reduce((a,b) => 1*a + 1*b);
        // SetToStorage(priceReduced);
    };

    const SetToStorage = (e) =>{
        console.log("storage total",addedUp)
                localStorage.setItem('itemState', JSON.stringify(listOfItems));
                localStorage.setItem('priceState', JSON.stringify(price));
                localStorage.setItem('totalState', JSON.stringify(e));
            }

            const SetStorageEmpty = (empty) =>{
                
                        localStorage.setItem('itemState', JSON.stringify(listOfItems));
                        localStorage.setItem('priceState', JSON.stringify(price));
                        localStorage.setItem('totalState', JSON.stringify(empty));
                    }
 
    const handleAddTotal = (e) =>{
        e.preventDefault();
        
        console.log("total ",addedUp)
        if(price.length === 0){
            setAddedUp([]);
            const empty = [];
            SetStorageEmpty(empty)
        }else{
            console.log("handleaddprice",price)
            console.log("total 1",addedUp)
            const priceReduced = price.reduce((a,b) => 1*a + 1*b);
            setAddedUp(priceReduced);
            SetToStorage(priceReduced)
        }


    
    }
    return(
        <body>
            <div className = "container"> 
            <header className="welcomeHeader">
                <h1>Grocery Price Calculator!</h1>
            </header>
            
                <div className = "inputSection">
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
                
                    <div className="labels">
                        <h3>Items</h3>
                        <h3>Price</h3>
                    </div>
                    <ListDisplay listOfItems={listOfItems} updateItems = {setListOfItems} price = {price} updatePrices = {setPrice} ></ListDisplay>
           
            <footer className="welcomeFooter">
                <div className="totalContain">
                    <p className = "totalP">${addedUp}</p>
                    <button  className="totalButtonStyle" type="text" onClick={handleAddTotal}>TOTAL</button>
                </div>
                
            </footer>
        </div> 
        </body>
    );
};

export default WelcomePage;