import React from "react";

import { useUserContext } from "../providers/UserProvider";

const style = {
    position : "fixed",
    top : "10%",
    left : "85%",
    padding : '.5rem',
    border: '.5rem solid rgba(10,10,10,5)'
}

export default function UserIcon() {
  const {user} = useUserContext() // same like welcome component using the useContext hook


  return (
    <div style={style}> User logged is {user.name} </div>
  )
}
