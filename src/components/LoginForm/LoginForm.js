import React, {Component} from 'react'
import './LoginForm.css'
// import warning from '../../images/warning.png'
import {NavLink} from 'react-router-dom'
import Input from '../UI/Input/Input'
import {createControl, validate, validateForm, errorMessageGenerator} from '../form/formFunctions'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { login } from '../../queries/mutations'
import { authentication } from '../../store/actions/actionsUser'


function createOptionControl(placeholder, type) {
  return createControl ({
    errorMessage: '',
    placeholder: placeholder,
    type: type
  }, {required: true})
}

function createFunctionControl() {
  return {
    mail: createOptionControl('Электронная почта', 'email'),
    password: createOptionControl('Пароль', 'password')
  }
}

class LoginForm extends Component {
  state = {
    isFormValied: false,
    formControls: createFunctionControl()
  }

  onChangeHandler = (event, controllName) => {

    const formControls = {...this.state.formControls}
    const control = { ...formControls[controllName] }
    
    control.value = event.target.value
    control.touched = true
    control.valid = validate(control.value, control.validation, control.type)
    control.errorMessage = errorMessageGenerator(control.value, control.type)

    formControls[controllName] = control
    
    this.setState({
      formControls, isFormValied: validateForm(formControls)
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

  submitHandler = event => {
    event.preventDefault()
  }

  loginHandler = () => {
    const {mail, password} = this.state.formControls
    this.props.authentication(mail.value, password.value, this.props.mutate)

    this.setState({
      erorrStatus: false,
      isFormValid: false,
      formControls: createFunctionControl()
    })
  }

  render () {
    return(
      <div className="Form__container">
        <form className="form" onSubmit={this.submitHandler}>

          {this.renderInputs()}
        
          <button className="btn btn_color-yellow" onClick={this.loginHandler} disabled={!this.state.isFormValied}>Войти в систему</button>

          <NavLink to="/Registration" className="Login__reg-href">Зарегистрироваться</NavLink>
        
        </form>
        {/* <div className="Form-error">
          <span><img src={warning} alt="warning" /></span>
          <span>Сообщение об ошибке</span>
        </div> */}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authentication: (email, password, mutate) => dispatch(authentication(email, password, mutate))
  }
}

const LoginFormRequest = graphql(login)(LoginForm)

export default connect(null, mapDispatchToProps)(LoginFormRequest)