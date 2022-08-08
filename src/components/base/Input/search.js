import React from 'react'
import styles from './input.module.css'

const InputSearch = ({type, placeholder, onChange}) => {
  return (
    <div>
        <input className={styles.search} type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default InputSearch