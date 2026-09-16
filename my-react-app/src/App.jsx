import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello React!</h1>

      <p>これは React の学習用にシンプル化した画面です。</p>

      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </>
  )
}

export default App