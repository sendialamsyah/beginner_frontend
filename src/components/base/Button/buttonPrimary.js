import React from 'react'
import styles from './button.module.css'

const buttonPrimary = ({title, bgColor, textColor, clickProps}) => {
  return (
    <div>
        <button className={styles.btnPrimary} style={{backgroundColor: bgColor, color: textColor}} onClick={clickProps}>{title}</button>
    </div>
  )
}

export default buttonPrimary 