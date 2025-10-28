import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>This is a test environment modified by Charles G. Pieczonka</h2>
      <h4>Bear witness to its glory</h4>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You've clicked this button {count} times!
        </button>
        { count == 0 && <h4>Go on, click it!</h4> }
        { count > 0 && count < 10 && <h4>Nice, keep going!</h4> }
        { count >= 10 && count < 20 && <h4>Incredible work champ.</h4> }
        { count >= 20 && count < 30 && <h4>You're the button master!</h4> }
        { count >= 30 && count < 50 && <h4>No one can stop you now!</h4> }
        { count >= 50 && count < 75 && <h4>How high can you go?</h4> }
        { count >= 75 && count < 88 && <h4>Amazing!!</h4> }
        { count >= 88 && count < 100 && <h4>New high score!</h4> }
        { count >= 100 && count < 105 && <h4>You win, the end!</h4> }
        { count >= 105 && count < 150 && <h4>Or is it...?</h4> }
        { count >= 150 && count < 200 && <h4>What secrets could the button hold if you keep going? Only time will tell.</h4> }
        { count >= 200 && count < 300 && <h4>You're going where no one has ventured before.</h4> }
        { count >= 300 && count < 500 && <h4>It may be wise to turn back before its too late.</h4> }
        { count >= 500 && count < 1000 && <h4>Mere mortals were not meant to click this far. Please cease all clicks now.</h4> }
        { count >= 1000 && count < 2500 && <h4>The clicks have consumed you.</h4> }
        { count >= 2500 && <h4>Goodbye.</h4> }
      </div>
      <p>
        hello, world!
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
