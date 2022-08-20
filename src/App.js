import './App.css'
import React, { useState, useEffect } from "react"

const App = () => {
  // State for managing the text input from textarea
  const [text, setText] = useState({ text: "dummy text" })

  // State for maintaning a timer for the game
  const [timer, setTimer] = useState(5)

  // State for starting the game
  const [start, setStart] = useState(false)

  // State setter function which is run when onChange event is triggered on the textarea
  const handleChange = (event) => {
    // Destructuring name and value from event.target object
    if (timer > 0 && start) {
      const { name, value } = event.target
      setText(prevText => ({ ...prevText, [name]: value }))
    }
  }

  // To start the game, setting the
  // start => true
  // timer => 10secs
  // text => empty string
  const handleClick = () => {
    setStart(!start)
    setTimer(10)
    setText({ ...text, text: "" })
  }


  // Updating the state of timer everytime timer changes
  useEffect(() => {
    // To prevent the timer going negative
    if (timer > 0 && start) {
      setTimeout(() => {
        setTimer(time => time - 1)
      }, 1000)
    }
    else {
      setStart(false)
    }
  }, [timer, start])

  return (
    <div>
      <h1 className='title'>Speed Typing Game</h1>
      <textarea
        name="text"
        value={text.text}
        onChange={handleChange} />
      <h4>Time remaining: {timer} </h4>
      {/* Conditionally enabling and disabling the button */}
      <button onClick={handleClick} className={timer > 0 && start ? "disabled" : "enabled"}>
        {timer > 0 && !start ? "Start Game" : "Play Again"}
      </button>
      <h1 className='word-count'>
        {/* Returns the word count, neglects extra white spaces and empty strings in count */}
        Word Count {text.text.trim().split(" ").filter(word => word !== "").length}
      </h1>
    </div>
  )
}

export default App
