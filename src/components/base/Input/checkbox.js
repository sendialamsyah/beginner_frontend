import React from 'react'
import styles from './input.module.css'

const Checkbox = () => {
  return (
    <div>
        <input className={styles.checkbox} type="checkbox" name="ckeck" id="ckeck" />
    </div>
  )
}

export default Checkbox