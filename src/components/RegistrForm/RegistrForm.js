import React, {Component} from 'react'
import './RegistrForm.css'
import {NavLink} from 'react-router-dom'
import Input from '../UI/Input/Input'
import {createControl, validate, validateForm, errorMessageGenerator} from '../form/formFunctions'
import FormErrorMessage from '../form/FormErrorMessage/FormErrorMessage'


function createOptionControl(placeholder, type) {
  return createControl ({
    errorMessage: '',
    placeholder: placeholder,
    type: type
  }, {required: true})
}

function createFunctionControl() {
  return {
    name: createOptionControl('Имя', 'text'),
    surName: createOptionControl('Фамилия', 'text'),
    mail: createOptionControl('Электронная почта', 'email'),
    password: createOptionControl('Пароль', 'password'),
    repeatPassword: createOptionControl('Повторите пароль', 'password')
  }
}
class RegistrForm extends Component {

  state = {
    isFormValid: false,
    formControls: createFunctionControl(),
    user: {
      name: '',
      secondName: '',
      email: '',
      password: ''
    },

    erorrStatus: false    
  }

  changeHandler = (value, controlName) => {
    const formControls = {...this.state.formControls}
    const control = { ...formControls[controlName] }
    
    control.touched = true
    control.value = value
    control.valid = validate(control.value, control.validation, control.type)
    control.errorMessage = errorMessageGenerator(control.value, control.type)
    
    formControls[controlName] = control
    
    this.setState({
      formControls,
      isFormValid: validateForm(formControls)
    })

  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]

      return(
        <Input 
          key={controlName + index}
          type={control.type}
          value={control.value}
          errorMessage={control.errorMessage}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          placeholder={control.placeholder}
          onChange={event => this.changeHandler(event.target.value, controlName)}
        />
      )
    })
  }

  sendUserData = event => {
    event.preventDefault()

    const {name, surName, mail, password, repeatPassword} = this.state.formControls 
    
    console.log(`${name.value}, ${surName.value}, ${mail.value}, ${password.value}, ${repeatPassword.value}`)
    if (password.value !== repeatPassword.value) {
      console.log('alarm')
      this.setState({
        erorrStatus: !this.state.erorrStatus
      })

    } else {
      console.log('its OK')

      const user = this.state.user

      user.name = name.value
      user.secondName = surName.value
      user.email = mail.value
      user.password = password.value
      // const userData = {
      //   name: name.value,
      //   secondName: surName.value,
      //   email: mail.value,
      //   pasword: password.value
      // }

      // user.push(userData)

      this.setState({
        user,
        erorrStatus: false,
        isFormValid: false,
        formControls: createFunctionControl()
      })
      
    }

    console.log(this.state.user)
    
  }


  render() {
    return(
      <div className="rg-Form__container">
        <form className="rg-form">
          <h2 className="Form__header">Регистрация</h2>
          
          {this.renderInputs()}

          <button 
            className="btn btn_color-yellow sz" 
            disabled={!this.state.isFormValid}
            onClick={this.sendUserData}
            >Применить и войти</button>

        </form>

        <div className="rg-Form__href">
          <span className="rg-href__text">Уже зарегистрированны? &ensp;<NavLink to="/"> Вход</NavLink></span>
        </div>

        {this.state.erorrStatus ? <FormErrorMessage /> : null}

      </div>
    )
  }
}
export default RegistrForm

