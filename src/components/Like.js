import react from 'react'
import { useState } from 'react'
import './Like.css'

const Like = () => {
  const [count, setCount] = useState(0)

  const changeCount = (increment, operator) => {
    if (operator === '+') {    
      setCount(count + increment)
    } else {
      if (count > 0) {
        setCount(count - increment)
      }
    }
  }
  
  return (
    <div className='Like'>
      <button onClick={() => {changeCount(1, '-')}}>👎</button>
      <p>{count}</p>
      <button onClick={() => {changeCount(1, '+')}}>👍</button>
    </div>
  )
}

export default Like