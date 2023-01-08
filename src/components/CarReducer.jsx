// this will be an exmaple of usereducer hook
import React from 'react'
import { useReducer } from 'react';

// assume a car compoenet which can perform action accelerate and breake and can't set a state from 0 to 100
// it needs to be increased gradually // optionly action object can also contain payload

const style = {
    position : 'fixed',
    top : "70%",
    left : "50%",
    transform : "translate(-50%,-50%)",
    display : "grid",
    girdTemplateColumns : '2fr 2fr'
}


const carReducerFn = (state,action) => {
    const {type} = action;

    // car cant go below 0 or above 100 , assume 100 to be max speed
    
    // so we handle them with nested ifs
    if (type === 'accelerate'){
        if (state.speed === 100) return {...state};
        return { ...state ,speed : state.speed + 10};
    }
    else if (type === 'brake'){
        if (state.speed === 0) return {...state};
        return { ...state ,speed : state.speed - 10}
    }

}

export default function CarReducer() {

    const [car,dispatch] = useReducer(carReducerFn,{speed:0})
  return (
    <div style={style}>
        <h1>Car (use reducer)</h1>
        <p> speed : {car.speed}</p>
        <input type={"button"} value={'accelerate'} onClick={() => dispatch({type : 'accelerate'})}/>
        <input type={"button"} value={'brake'} onClick={() => dispatch({type : 'brake'})} />
    </div>
  )
}
