import React, { Component, useEffect, useState } from 'react';



const Hooks = () => {

const [windowsWidth, setwindowsWidth]  = useState("")
const [name, setName] = useState("John Conner");
const [newJoke, setNewJoke] = useState();
const [joke, setJoke] = useState("")
const [jokeCont, setjokeCont] = useState("")
useEffect(() => {
console.log("Props Change")
}, [name])

useEffect(() => {
fetch("https://v2.jokeapi.dev/joke/Any").then(response => response.json())
.then(data => {
    setJoke(data.setup) 
    setjokeCont(data.delivery)
});
}, [newJoke])


const  RefreshJoke = () => {
    fetch("https://v2.jokeapi.dev/joke/Any").then(response => response.json())
.then(data => {
    setJoke(data.setup) 
    setjokeCont(data.delivery)
});
}


    return ( <div>

        <div>
            <h1>{joke}</h1>
            <p>{jokeCont}</p>
            <button onClick={() => {RefreshJoke()}}>New joke</button>
        </div>

    </div> );
}
 
export default Hooks;