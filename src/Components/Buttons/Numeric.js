import React, { Component, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./Numeric.css";
import { displayfirstNumber, displayOperator, displayResult, displaySecondNumber } from '../../redux/Displayslice';





const Numeric = () => {
    const dispatch = useDispatch()
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [digitsEntered, setdigitsEntered] = useState(false);
  const [result, setResult] = useState("");
  const [selectedOperator, setselectedOperator] = useState("")

//   const divide = () => {
//     if (firstNumber !== 0 && secondNumber !== 0)
//       return setResult(firstNumber / secondNumber), digitsEntered(true);
//     else return;
//   };

  
  const multiply = () => {

    if (firstNumber !== 0 && secondNumber !== 0)
      return setResult(firstNumber * secondNumber), setdigitsEntered(true);
    else return;
  };

  const subtract = () => {
    if (firstNumber !== 0 && secondNumber !== 0)
      return setResult(firstNumber - secondNumber), setdigitsEntered(true);
    else return;
  };

  const AllClear = () => {
    return setFirstNumber(""),
         setSecondNumber(""),
          setdigitsEntered(false),
          setselectedOperator(""),
          dispatch(displayOperator("")),
          dispatch(displayResult(0))
          
      
  }



  const Calculate = () => {
      if (selectedOperator === "multiply") {
        let answer = (firstNumber * secondNumber)
        console.log("Answer" , answer)  
        // AllClear()
        return  setResult(answer)
      }

      else  if (selectedOperator === "divide") {
        let answer = (firstNumber / secondNumber)
        console.log("Answer" , answer)  
        // AllClear()
        return  answer
      }

      else  if (selectedOperator === "add") {
        let answer = (firstNumber + secondNumber)
        console.log("Answer" , answer)  
        // AllClear()
        return  answer
      }

      else  if (selectedOperator === "sub") {
        let answer = (firstNumber - secondNumber)
        console.log("Answer" , firstNumber)  
        // AllClear()
        return  answer
      }

  }


  const Operator = (op) => {
    switch (op) {
        case '*':
          return setselectedOperator("multiply") , dispatch(displayOperator("*"));

          case '/':
            return setselectedOperator("divide");

            case '+':
                return setselectedOperator("add");
  
                case '-':
                    return setselectedOperator("sub");
        default:
          return '';
      }
  }


  const Numbers = (num) => {
    if(selectedOperator === "" ) {
            let nums = [  firstNumber + num]
            console.log(nums)
            // dispatch(displayfirstNumber(firstNumber))
        return setFirstNumber(nums) 

    } 

    else if (selectedOperator !== "") {
        let nums = [  secondNumber + num]
            console.log(nums)
        return setSecondNumber(nums);
    }
    
  }



  useEffect(() =>{
    dispatch(displayfirstNumber(firstNumber))
  }, [firstNumber])
 

  useEffect(() =>{
    dispatch(displaySecondNumber(secondNumber))
  }, [secondNumber])



  useEffect(() =>{
    dispatch(displayResult(result))
  }, [result])


  useState(() => {console.log("First Number:", firstNumber, "  Second Number:", secondNumber )} ,[selectedOperator])

  return (
    <>
      <div className="frame-2-1">
        <button className="digitalbutton" onClick={() => AllClear()}>
          C
        </button>
        <button className="digitalbutton" onClick={() => firstNumber.pop()}>
          D
        </button>
        <button className="digitalbutton" onClick={() => Operator("/")}>
          /
        </button>
        <button className="digitalbutton" onClick={() => Operator("*")}>
          *
        </button>
      </div>
      <div className="frame-1-1">
        <button className="digitalbutton" onClick={() =>  Numbers(7)}> 7 </button>
        
        <button
          className="digitalbutton"
          onClick={() =>  Numbers(8)}
        >
          8
        </button>
        <button
          className="digitalbutton"
          onClick={() =>
            Numbers(9)
          }
        >
          9
        </button>
        <button className="digitalbutton" onClick={() => Operator("-")}>
          -
        </button>
      </div>
      <div className="frame-1-2">
        <button className="digitalbutton" onClick={() => Numbers(4)}>
          4
        </button>
        <button className="digitalbutton" onClick={() => Numbers(5)}>
          5
        </button>
        <button className="digitalbutton" onClick={() => Numbers(6)}>
          6
        </button>
        <button className="digitalbutton" onClick={() => Operator("+")}>
          +
        </button>
      </div>
      <div className="frame-1-3">
        <button className="digitalbutton" onClick={() => Numbers(1)}>
          1
        </button>
        <button className="digitalbutton" onClick={() => Numbers(2)}>
          2
        </button>
        <button className="digitalbutton" onClick={() => Numbers(3)}>
          3
        </button>
        <button
          className="digitalbutton_long_w"
          onClick={() => Calculate()}
        >
          =
        </button>
      </div>
      <div className="frame-1-4">
        <button
          className="digitalbutton_long_h"
          onClick={() => Numbers(0)}
        >
          0
        </button>
        <button className="digitalbutton" onClick={() => Numbers(".")}>
          .
        </button>
      </div>
    </>
  );
};

export default Numeric;
