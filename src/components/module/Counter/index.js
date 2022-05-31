import React, { useState } from 'react'
import styles from './counter.module.css'

const Counter = () => {
    const [count, setCount] = useState(0) 
    const handleIncrement = (val) => {
        setCount(count + val)
    }
    const handleDecrement = (val) => {
        setCount(count - val)
    }
  return (
    <div>
        <div className={styles.counter}>
        <button onClick={()=>handleDecrement(1)}>-</button>
        <p> {count} </p>
        <button onClick={()=>handleIncrement(1)} >+</button>
        </div>
    </div>
  )
}

export default Counter