import React, {useState} from "react";
import './eightball.css'
import  {answers}  from "./Answers";

// Get randomly msg and color from answers arr of obj
function randomly(array) {
    const randomIdx = Math.floor(Math.random() * array.length)
    return array[randomIdx]
}
// EightBall Component
const EightBall = (props) => {
   const [msg,setMsg] = useState('Thing of a question')
   const [color,setColor] = useState('black')

    // Handle when btn is clicked to get randomly answer
   function getRandomAnswer() {
    const {msg,color} = randomly(props.answers)
    setMsg(msg)
    setColor(color)
}

// Reset Button
function reset() {
    setMsg('Thing of a question')
    setColor('black')
}



return (
    <>
    {/* Display Eightball and Reset buttons */}
    {/* Make EightBall button to work dynamically.  */}
    <button className="EightBall-button" style={{backgroundColor : color}} onClick={getRandomAnswer}>{msg}</button>
    <button className='EightBall-reset' onClick={reset}>RESET</button>
    </>
)
    }

    EightBall.defaultProps = {answers}



export default EightBall