import React from 'react'
import './Input.css'

function isInvalid({valid, touched, shouldValidate}) {

  return !valid && shouldValidate && touched
  
}


const Input = (props) => {
  
  const cls = ['Input']
  const inputType = props.type || "text"
  const inputId = props.inputId || Date.now()

  if (isInvalid(props)) {
    cls.push('invalid')
  }

  return (

      <div className={cls.join(' ')}>
        <input 
          type={inputType}
          id={inputId}
          name={props.name}
          placeholder={props.placeholder || null} 
          value={props.value}
          onChange={props.onChange}
        />

      {isInvalid(props) ? <span className="input-error-message">{props.errorMessage}</span> : null}
      
      </div>
      
    
  )
}

export default Input