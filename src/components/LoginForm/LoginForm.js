import React, {Component} from 'react'
import './LoginForm.css'
import warning from '../../images/warning.png'
import {NavLink} from 'react-router-dom'
import Input from '../UI/Input/Input'
import is, { object } from 'is_js'

export default class LoginForm extends Component {
  state = {
    isFormValied: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        errorMessage: 'Ошибка введите коректную почту',
        valid: false,
        touched: false,
        placeholder: 'Электронная почта',
        validation: {
          reqired: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        errorMessage: 'ошибка не верный пароль',
        valid: false,
        touched: false,
        placeholder: 'Пароль',
        validation: {
          reqired: true,
          minLength: 6
        }
      }
    }
  }

  validateControl(value, validation) {
    if(!validation) {
      return true
    }

    let isValid = true

    if(validation.reqired) {
      isValid = value.trim() !== '' && isValid
    }

    if(validation.email) {
      isValid = is.email(value) && isValid
    }

    if(validation.minLength) {
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }

  onChangeHandler = (event, controllName) => {
    // console.log(`${controllName}: ${event.target.value}`)

    const formControls = {...this.state.formControls}
    const control = { ...formControls[controllName] }
    
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    
    formControls[controllName] = control

    let isFormValied = true

    Object.keys(formControls).forEach(name => {
      isFormValied = formControls[name].valid && isFormValied
    })

    this.setState({
      formControls, isFormValied
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controllName, index) => {
      const controll = this.state.formControls[controllName]
      return (
        <Input
          key={controllName + index}
          type={controll.type}
          value={controll.value}
          errorMessage={controll.errorMessage}
          valid={controll.valid}
          touched={controll.touched}
          shouldValidate={!!controll.validation}
          placeholder={controll.placeholder}
          onChange={event => this.onChangeHandler(event, controllName)}
         />
      )
    })
  }
  render () {
    return(
      <div className="Form__container">
        <form className="form">

          {this.renderInputs()}
        
          <button className="btn btn_color-yellow" disabled={!this.state.isFormValied}>Войти в систему</button>

          <NavLink to="/Registration" className="Login__reg-href">Зарегистрироваться</NavLink>
        
        </form>
        <div className="Form-error">
          <span><img src={warning} alt="warning" /></span>
          <span>Сообщение об ошибке</span>
        </div>
      </div>
    )
  }
}