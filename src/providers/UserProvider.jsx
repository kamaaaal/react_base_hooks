import React, {createContext,useContext} from 'react'
import { useState } from 'react';

const UserContext = createContext(); /// creating a context

const userObj = {name : 'john', age : 21} // a dummy user object for example

export default function UserProvider({children} /* these children will be wrapped by provider */) {

  const [user,setUser] = useState(userObj); // creating a user state 

  return (
        // <UserContext.Provider value={{user}} > {/* passing value attribute whicil will be availabe to all children */}
        <UserContext.Provider value={{user,setUser}} > {/* passing both user and setUSer so that changeUSer component can change things */}
            {children} {/* the children will be componenets from app */}
        </UserContext.Provider>
    )
}

/// after creating context provider we need create useUserContext for the consumers 
export const useUserContext =  function () { return useContext(UserContext) }
                                                    // this will be used by consumers
                                                    // when this function is called it will return the context 

                                                
