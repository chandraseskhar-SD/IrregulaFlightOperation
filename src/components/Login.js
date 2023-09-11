import axios from "axios";
import React, { useEffect, useState } from "react";
import ChatBot from "./ChatBot";
import { useNavigate } from "react-router-dom";
import Heloo from "./Heloo";

const Login = ()=>{
    const data1 = "Login"
    const [data, setData] = useState([
        {
            username:"",
             pnr:""
        }])
    const [responseData, setResponseData] = useState(null)
    const url = "https://eumzixlkx4sq4e5os5acx3qh5i0fwakm.lambda-url.us-east-1.on.aws/"
    const navigate = useNavigate();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setData({...data,
            
            [name]: value

        })
       
    }
    console.log(data)
    const handleSubmit = async()=>{
        console.log('hi')
      try{
         const response = await axios.post(url, data)
         const result = response.data;
         setResponseData(response.data)
         console.log(responseData);
      }
      catch{
          console.log("error")
          setData({username:"", pnr:""})
      }
    }
    console.log(data1)
    useEffect(()=>{
        if(responseData){
        setResponseData(responseData)
        console.log(responseData)
         navigate('/ChatBot', {state:{data: responseData}})
        }
    },[responseData])
    return(
        <div>
            <center>
            <h3>login</h3>
            <div>Username:<input type="text" name="username" value={data.username} onChange={handleChange}/></div>
            <div>Pnrnumber:<input type = "text" name="pnr" value={data.pnr} onChange={handleChange}/></div>
            <button onClick={handleSubmit} >Login</button>
            </center>
            <Heloo abc={data1}/>
       
            {/* <Bot/> */}
         

        </div>
    )
}
export default Login;