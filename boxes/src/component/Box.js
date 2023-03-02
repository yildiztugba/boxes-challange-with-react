import React from "react"

export default function Box(){
    const styles = {
        backgroundColor: "black"
    }

    function handleClick(){
      console.log("clicked")
    }
    
    
    return(
        <div 
            style={styles} 
            className="box"
           onClick= {handleClick}
        >
        </div>
    )
}