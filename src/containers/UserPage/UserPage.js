import React, {Component} from 'react'
import './UserPage.css'
import PageMenu from '../../components/PageMenu/PageMenu'
import {createControl, validate, validateForm, errorMessageGenerator} from '../../components/form/formFunctions'
import Input from '../../components/UI/Input/Input'

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


class UserPage extends Component {
  
  state = {
    isFormValid: false,
    formControls: createFunctionControl()
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
        <div className="form__row-wrap" key={controlName + index}>
          <label>{control.placeholder}</label>
          <Input
            type={control.type}
            value={control.value}
            errorMessage={control.errorMessage}
            valid={control.valid}
            touched={control.touched}
            shouldValidate={!!control.validation}
            onChange={event => this.changeHandler(event.target.value, controlName)}
          />
        </div>
      )
    })
  }

  saveUserData = (event) => {
    event.preventDefault()
    
    const {password, repeatPassword} = this.state.formControls 
    
    if (password.value !== repeatPassword.value) {
      console.log('ПАроли не совпадают')
    } else alert('form submitted!')

  }
  
  render() {
    return(
      <div className="User-page__body">
        <PageMenu />
        <div className="User-page__container">
          <div className="User-page__header">
            <div className="header__user-name">
              <span>Борис Годунов. Редактирование</span>
            </div>
            <div className="header__button">
              <button 
                className="User-page btn btn_color-yellow"
                onClick={this.saveUserData}
                disabled={!this.state.isFormValid}
                >Сохранить</button>
            </div>
          </div>
          <form className="User-page__form">

            {this.renderInputs()}
            
          </form>
        
        </div>
      
      </div>
    )
  }
}

export default UserPage