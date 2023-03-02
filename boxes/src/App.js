import './App.css';
import React from "react"
import boxes from './boxes'
import Box from './component/Box'
function App() {

const [squares, setsquare] = React.useState(boxes)

 
   
 const squareElements = squares.map(square => (
       <Box />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

export default App;
