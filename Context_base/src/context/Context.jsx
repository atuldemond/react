import React, { createContext, useState } from 'react'


export const UserConetxt = createContext();


const Context = (props) => {

    const [user , SetUser] =  useState([
        {id:0, name: "Atul Demond" , city:"Earth"},
        {id:1, name: "Krishna" , city:"India"},
        {id:2, name: "Alice Joe" , city:"USA"},


    ])
 
    // console.log(props)
    return  <UserConetxt.Provider value={{user, SetUser}}>
            {props.children}

    </UserConetxt.Provider>
   
   
}

export default Context
