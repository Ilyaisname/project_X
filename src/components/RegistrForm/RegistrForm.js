import React, {Component} from 'react'
import './RegistrForm.css'
import {NavLink} from 'react-router-dom'
import Input from '../UI/Input/Input'
import {createControl, validate, validateForm, errorMessageGenerator} from '../form/formFunctions'
import FormErrorMessage from '../form/FormErrorMessage/FormErrorMessage'
import { connect } from 'react-redux'
import { createNewUserData } from '../../store/actions/createUser'


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

      const newUser = this.props.newUser

      newUser.name = name.value
      newUser.secondName = surName.value
      newUser.email = mail.value
      newUser.password = password.value
      
      this.props.createNewUserData(newUser)

      this.setState({
        erorrStatus: false,
        isFormValid: false,
        formControls: createFunctionControl()
      })
      
    }

    console.log(this.props.newUser)
    
  }


  render() {
    console.log(this.props)
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

function mapStateToProps(state) {
  return {
    newUser: state.create.newUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewUserData: newUser => dispatch(createNewUserData(newUser))
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(RegistrForm)

