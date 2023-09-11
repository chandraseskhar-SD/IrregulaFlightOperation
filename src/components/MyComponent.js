import { useContext } from "react";
import  MyContext  from "./MyContext";

const MyComponent = ()=>{
    const {inputvalue, handleChange, handleSubmit} = useContext(MyContext);
    return(
        <div>
            <center>
                <input type="text" name="username" value={inputvalue} onChange={handleChange}/>
                <input type="text" name="pnr" value={inputvalue} onChange={handleChange}/>
                <button onClick={handleSubmit}>Login</button>
            </center>
          
        </div>
    )
}
export default MyComponent;