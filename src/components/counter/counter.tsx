import {useState} from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  const [amout, setAmount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input 
        type="number" 
        name='amount' 
        value={amout} 
        onChange={(e) => setAmount(parseInt(e.target.value))} 
      />
      <button onClick={() => setCount(amout)}>Set</button>
    </div>
  )
}
