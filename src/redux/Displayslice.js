import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstNumber: 0,
    secondNumber: "",
    result: 0,
    Operator: ""
}


export const Displayslice = createSlice({
    name: "Display",
    initialState,
    reducers: {
        displayfirstNumber: (state, action) => {
            state.firstNumber = action.payload
     
        },
        displaySecondNumber: (state, action) => {
            state.secondNumber = action.payload
        },
        displayResult: (state, action) => {
            state.result = action.payload
        },
        displayOperator: (state, action) => {
            state.Operator = action.payload
        },  
    }
})


export const { displayfirstNumber, displaySecondNumber, displayResult, displayOperator } = Displayslice.actions

export default Displayslice.reducer