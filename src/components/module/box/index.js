import React from 'react'
import {useSelector} from 'react-redux'
import styles from './box.module.css'
const Box = () => {
    const {list} = useSelector((state)=>state)
  return (
    <div className={styles.container}>
        <ul>
            <li>{list}</li>
        </ul>
    </div>
  )
}

export default Box