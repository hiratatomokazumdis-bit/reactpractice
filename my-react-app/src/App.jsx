import { useState } from 'react'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React!</h1>

      <Hello name="tomokazu" />

      <p>これは React の学習用にシンプル化した画面です。</p>

      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button onClick={() => setCount(count - 1)}>
        Count is {count}
      </button>
    </>
  )
}

export default App