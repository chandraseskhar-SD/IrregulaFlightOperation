import React, { useContext } from "react";
import MyContext  from "./MyContext";

const OtherComponent = ()=>{
    const {responseData} = useContext(MyContext)
    console.log(responseData);
    return(
        <div>
            <center>
                <h1>heloo</h1>
            </center>
        </div>
    )
}
export default OtherComponent;