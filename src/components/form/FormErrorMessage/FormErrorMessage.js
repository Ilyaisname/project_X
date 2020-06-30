import React from 'react'
import './FormErrorMessage.css'
import ErrorIcon from './ErrorIcon'

const FormErrorMessage = () => {
  return(
    <div className="Form-error">
      <span><ErrorIcon /></span>
      <span>Сообщение об ошибке</span>
    </div>
  )
}
export default FormErrorMessage 