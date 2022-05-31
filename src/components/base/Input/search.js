import React from 'react'
import styles from './input.module.css'

const InputSearch = () => {
  return (
    <div>
        <input className={styles.search} type='text' placeholder='Search' />
    </div>
  )
}

export default InputSearch