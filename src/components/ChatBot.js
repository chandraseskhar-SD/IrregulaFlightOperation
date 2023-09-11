import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import './Global.css';

const ChatBot = ()=>{
    var a= "flight";
    var b = "buttons"
    const location = useLocation();
    const response = location.state?.data

    //  const [data, setData] = useContext(store)
    console.log(response.data)
    // const text = response.data[0].text
    // const flights = response.data[1].flights
    const buttons = response.data[2].buttons
    console.log(buttons)
    // const buttons1 = response.data[2].text
    
    return(
        <div className="maindiv">
            <div className="subdiv">
               
            <center>
                {/* <div className="text">{text}</div>
                <div>
                    {flights.map((flight, flightIndex)=>(
                        <div key={flightIndex}>
                            <h6>{flight.Destination}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                 
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                 
                            <h6>{flight.Arrival_Date}</h6>
                            <h6>{flight.Arrival_Date}</h6>
                 
                        </div>
                    ))}
                </div>
                <div>
                    {buttons.map((button, buttonIndex)=>(
                        <div key={buttonIndex}>
                            <button>{button}</button>
                        </div>
                    ))}
                </div>
                <div>{buttons1}</div> */}
                {response.data.map((data,index)=>{
                    if(data.type === "text"){
                        return(
                        <p key={index}>
                            <p>{data.text}</p>
                            <button>{data.buttons}</button>
                            
                        </p>
                        )
                    }
                    else if(data.type === "flight"){
                        return(
                            <div key={index}>
                               {data.flights.map((flights, flightIndex) =>(
                                 <div key={flightIndex}>
                                    <p>{flights.Destination}</p>
                                 </div>
                               ))}

                            </div>
                        )
                    }
                    // else if(data={buttons}){
                    // {data.buttons.map((button, buttonIndex)=>(
                    //     <div key={buttonIndex}>
                    //         <button>{button.buttons}</button>
                    //     </div>
                    // ))}
                    // }

                    
                })
                
                }
               
            </center>
            </div>
            <center>
            <input type="text"/>
            </center>
            
        </div>
    )
}

export default ChatBot;