import React, { useState } from 'react'

const Counter = () => {

  let [count, setcount] = useState(0)

  const increment = () => {
    setcount(count + 1)
  }
  const decrement = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }
  const reset = () => {
    setcount(count = 0)
  }

return (
    <div className="container">
      <div className="card">
        <h2>Counter</h2>
        <div className="display">
          <span className="count-label">Current value</span>
          <span className="count-value">{count}</span>
        </div>

        <div className="controls">
          <button className="btn increment" onClick={increment}>+</button>
          <button className="btn decrement" onClick={decrement}>–</button>
          <button className="btn reset" onClick={reset}>⟳</button>
        </div>
      </div>

      <footer className="footer">
        <small>Built with React & Vite</small>
      </footer>
    </div>
  )
}

export default Counter