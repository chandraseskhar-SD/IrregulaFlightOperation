import React from "react";
import  MyProvider, { Context } from "./components/MyContext";
import MyComponent from "./components/MyComponent";
import OtherComponent from "./components/OtherComponent";
import { BrowserRouter,Router,Route,Routes, Switch} from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Login from "./components/Login";
import ChatBot from "./components/ChatBot";
import MyContext from "./components/MyContext";
import Irrops from "./components/Irrops";
import Verbose from "./components/Verbose";


function App() {
  return (
    <div>
       {/* <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={<Login/>}/>
          <Route exact path = '/ChatBot' element={<ChatBot/>}/>
        </Routes>
       </BrowserRouter> */}
       {/* <MyContext.Provider>
        <MyProvider/>
         <MyComponent/>
         <OtherComponent/>
       </MyContext.Provider> */}
       {/* <MyProvider/> */}
       <Verbose/>
       {/* <Irrops/> */}
    </div>
  
  );
}

export default App;
