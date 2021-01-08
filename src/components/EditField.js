import React from "react"
import {useState} from "react"



const EditField = (props) => {
    console.log("editField",props)
    const [newPrice,setNewPrice] = useState([])
    const [newItem,setNewItem] = useState([])

    
    return(
        <div>
            <input type="text" value={newItem}></input>
            <button>submit</button>
        </div>
        
    );

}

export default EditField