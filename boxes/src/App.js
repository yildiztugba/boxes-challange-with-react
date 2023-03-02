import './App.css';
import React from "react"
import boxes from './boxes'
import Box from './component/Box'
function App() {

const [squares, setsquare] = React.useState(boxes)

  function handleClick(id){
      setsquare((prevSquare)=>{
    return prevSquare.map((square)=>{
      return square.id === id ? {...square, on: !square.on} : square
    })
      })
    }
   
 const squareElements = squares.map(square => (
       <Box 
        key= {square.id}
        
        on = {square.on}
        toggle = {()=>handleClick(square.id)}

       />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

export default App;
