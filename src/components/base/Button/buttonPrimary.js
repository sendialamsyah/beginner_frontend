import React from 'react'
import styles from './button.module.css'

const buttonPrimary = ({title, bgColor, textColor, onClick}) => {
  return (
    <div>
        <button className={styles.btnPrimary} style={{backgroundColor: bgColor, color: textColor}} onClick={onClick}>{title}</button>
    </div>
  )
}

export default buttonPrimary 