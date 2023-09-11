import React, { useState } from "react";
import { createContext,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MyContext = createContext();
export const Context = () => useContext(MyContext);


const  MyProvider  = ({children})=>{

    const [inputvalue, setInputValue] = useState([{username:"", pnr:""}]);
    const[responsedata, setResponseData] = useState(null);
    const url ="https://eumzixlkx4sq4e5os5acx3qh5i0fwakm.lambda-url.us-east-1.on.aws/"
    // const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setInputValue({
            ...inputvalue,
            [name] : value
        })
        console.log(inputvalue);
    }

    const handleSubmit = async() =>{
        const response = await axios.post(url,inputvalue)
        try{
            if(response){
                setResponseData(response);
                console.log(responsedata);
                // navigate('./OtherComponent')

            }

        }
        catch{
            console.log("error");
        }
    }
    
    
    return(
        <Context.Provider value={{inputvalue, handleChange,handleSubmit, responsedata}}>
            {children}
        </Context.Provider>

    )

}

export default {Context, MyProvider};