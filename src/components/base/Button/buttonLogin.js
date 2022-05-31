import React from 'react'
import styles from './button.module.css'

const ButtonLogin = ({title, bgColor, textColor, onClick}) => {
  return (
    <div>
        <button className={styles.btnLogin} style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>{title}</button>
    </div>
  )
}

export default ButtonLogin