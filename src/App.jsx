import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './users'
import Friends from './friends'
import Friend from './Friend'

function App() {

    function handleClick(){

        alert('Button Clicked')

    }

    const handleClick2 = () => {

      alert('Button 2 clicked')

    }

    const addToFive = (num) => {

      alert(num + 5);

    }

  return (
    <>
 
      <h3>React Core Concept</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

     <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={()=> {alert('Third button clicked ')}}>Click Me 3</button>
      <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App
