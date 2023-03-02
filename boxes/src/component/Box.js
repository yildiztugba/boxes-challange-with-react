import React from "react"

export default function Box(props){
    const styles = {
        backgroundColor: props.on ? "black" : "white"
    }

    

    function handleClick(){
      console.log(props.id)
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