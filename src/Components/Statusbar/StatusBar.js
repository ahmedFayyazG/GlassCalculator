import React, { Component, useEffect } from 'react';
import "./Statusbar.css";
// import history from "./Assets/history.png"

import history from "./../../Assets/history.png"
import burger from "./../../Assets/Burger.png"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { displayfirstNumber, displayOperator, displayResult, displaySecondNumber } from '../../redux/Displayslice';




const Statusbar = () => {
const  displayfirstNumber = useSelector((state) => state.display.firstNumber)
const  Operator = useSelector((state) => state.display.Operator)
const  secondNumber = useSelector((state) => state.display.secondNumber)
const  Result = useSelector((state) => state.display.result)



useEffect(() => {
    console.log("Reducers?" , displayfirstNumber)
})


    return (
        <>
         <div className='statusBar__main'>
               
        </div> 
         <div className='history_tab'>
         <img src={burger} alt="burger" />
         <img src={history} alt="history" />
         </div>
         <div className='ScoreScreen'>
           {displayfirstNumber} {Operator} {secondNumber}
             
         </div>
         <div className='Total'>
             {Result}
         </div>
 </>
    
    );
}
 
export default Statusbar;