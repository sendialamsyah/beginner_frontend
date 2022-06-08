import React from 'react'
import styles from './button.module.css'

const ButtonNav = ({title, bgColor, textColor, onClick}) => {
  return (
    <div>
        <button className={styles.btnNav} style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>{title}</button>
    </div>
  )
}

export default ButtonNav