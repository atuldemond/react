import React from "react";

import "./Cards.css"

const Cards = ()=>{

    let Download = ()=>(alert("Try Later"))

    const data = [
        {
            name:"High Hills",
            des:"This is High hill by Yo Yo"
        },
        {
            name:"Makhna ",
            des:"This is Makhna by Yo Yo"
        },
        {
            name:"Blue Eyes ",
            des:"This is Blue Eyes by Yo Yo"
        },
        {
            name:"Kalastar 2 ",
            des:"This is Kalastar2 Eyes by Yo Yo"
        },
      
    ];

    return(
       
        <div className="main">

            {data.map((elm,ind)=>(
        <div className="song">
            <h3>{elm.name}</h3>
            <p className=".text">{elm.des}</p>
            <button onClick={Download} className="btn">Download Now</button>
        </div>

            ))}
           

        </div>
    )
}

export default Cards
