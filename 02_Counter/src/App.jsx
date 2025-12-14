import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  // let counter = 15

  let AddCounter = () =>{
    if(counter>19){
      window.alert("Counter value can't be more than 20");
    }else{
      counter = counter + 1;
    setCounter(counter);
    } 
  }
    let RemoveCounter = () =>{
    if(counter<1){
      window.alert("Counter value can't be negative");
    }else{
      counter = counter - 1;
    setCounter(counter);
    }
  }
  return (
    <>
      <h2>Counter: {counter}</h2>
      <button onClick={AddCounter}>Add value: {counter}</button>
      <br />
      <button onClick={RemoveCounter}>Remove value: {counter}</button>
    </>
  )
}

export default App
