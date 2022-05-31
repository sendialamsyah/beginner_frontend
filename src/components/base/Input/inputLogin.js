import React from 'react'
import styles from './input.module.css'
import PropTypes from 'prop-types'

const InputLogin = ({id, ...props}) => {
  return (
    <div>
        <input className={styles.warpper} id={id} {...props} />
    </div>
  )
}
InputLogin.propTypes = {
  label : PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}


export default InputLogin