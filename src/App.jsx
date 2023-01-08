import React from 'react';
// importing the provider 
import UserProvider from './providers/UserProvider';
import UserIcon from './components/UserIcon';
import Welcome from './components/Welcome';
import ChangeUser from './components/ChangeUser';
import CarReducer from './components/CarReducer';

export default function App(){
  return ( 
    <UserProvider> 
      <UserIcon/>
      <Welcome /> 
      <ChangeUser/>
      <CarReducer></CarReducer>
    </UserProvider>
  )
} 