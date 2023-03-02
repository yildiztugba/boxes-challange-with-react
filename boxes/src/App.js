import './App.css';
import React from "react"
import boxes from './boxes'
import Box from './component/Box'
function App() {

const [squares, setsquare] = React.useState(boxes)

 const styles = {
        backgroundColor: "black"
    }

    function handleClick(){
      console.log("clicked")
    }
   
 const squareElements = squares.map(square => (
       <div 
            style={styles} 
            className="box"
           onClick= {handleClick}
        >
        </div>
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

export default App;
