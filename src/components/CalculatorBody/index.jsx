import React from 'react'
import Button from '../Button/index'
import Input from '../Input/index'
import classes from './CalculatorBody.module.scss'

const CalculatorBody = () => {
  return (
    <div className={classes.CalculatorBody}>
      <Input />
      <div className={classes.buttons_wrapper}>
        <Button/>
      </div>
    </div>
  )
}

export default CalculatorBody