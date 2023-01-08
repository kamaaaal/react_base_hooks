// this change user file will try to access setUser from the provider and change the user which should result in changing the  user in all other componets too
/// it was succesfull changing the state from the change user
import React from 'react'
import { useRef } from 'react'
import { useUserContext } from '../providers/UserProvider';

const style = {
    position : 'fixed',
    top : "55%",
    left : "50%",
    transform : "translate(-50%,-50%)",
    display : "flex",
    flexDirection : "row",

}

export default function ChangeUser() {
    const inputNameRef = useRef(null);

    const {user,setUser} = useUserContext(); // retreiving Set user also here

    const onChangeUserClick = (e) =>{
        // console.log('on click');
        const currentName = inputNameRef.current.value;
        // console.log(currentName,'currrent user');
        setUser({name : currentName, age : 19});
    } 

  return (
    <form style={style}>    
        <input ref={inputNameRef} type="text" placeholder=' new user name'/>
        <input onClick={onChangeUserClick} type={'button'} value={'change user'} />
    </form>
  )
}
