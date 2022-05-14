import React from 'react'
import { info } from '../../Info/info'
import classes from './Button.module.scss'
import useDrawInput from '../../hooks/useDrawInput'

const Button = () => {

  const buttons = info.map(item => (
      <button 
        key={item.id} 
        onClick={useDrawInput}
        className={classes.buttonBody}
        > 
        {item.buttonText}
      </button>
    )
  )
  return(
    <>
      {buttons}
    </>
  )
}

export default Button