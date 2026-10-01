import { useState } from 'react'
import Hello from './Hello'

function App() {
  const [count, setCount] = useState(0)
  // 文言と色を count から決める
  const message =
    count > 0
      ? 'プラスの値です'
      : count < 0
        ? 'マイナスの値です'
        : 'ゼロです。'
    const color =
      count > 0
        ? 'green'
        : count < 0
          ? 'red'
          : 'black'

  return (
    <>
      <h1>Hello React!</h1>

      <Hello name="tomokazu" />

      <p style={{ color: color }}>{message}</p>
      <p>現在の値: {count}</p>

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