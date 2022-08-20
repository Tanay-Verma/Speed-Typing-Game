import './App.css'

const App = ()=>{
  return(
      <div>
          <h1 className='title'>Speed Typing Game</h1>
          <textarea 
          name="text"
          value=""/>
          <h4>Time remaining </h4>
          <button>Start Game</button>
          <h1 className='word-count'>Word Count</h1>
      </div>
  )
}

export default App
