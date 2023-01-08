import React from 'react'
// importing the useUserContext here 
import { useUserContext } from '../providers/UserProvider'

const style = {
    position : 'fixed',
    top : "50%",
    left : "50%",
    transform : "translate(-50%,-50%)"  
}


export default function Welcome() {

    const {user} = useUserContext(); // using the context here to get the values from useContext
                                    // destrcuting user object as we wrapped them with prop user in context provider
                                    
    return (
        <div style={style}> Welcome {user.name}</div>
    )
}
