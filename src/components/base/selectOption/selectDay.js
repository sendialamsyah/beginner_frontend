import React, { useState } from 'react'
import styles from './selectOption.module.css'

const SelectDay = () => {
    const [day, setDay] = useState(1) 
    const handleOption = (val) => {
        setDay()
    }
  return (
    <div>
        <div className={styles.day}>
        <select name="select" id="select">
          <option value={()=>handleOption(1)}>{day}</option>
        </select>
        </div>
    </div>
  )
}

export default SelectDay