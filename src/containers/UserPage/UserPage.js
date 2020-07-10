import React, {Component} from 'react'
import './UserPage.css'
import PageMenu from '../../components/PageMenu/PageMenu'
import {createControl, validate, validateForm, errorMessageGenerator} from '../../components/form/formFunctions'
import Input from '../../components/UI/Input/Input'
import { connect } from 'react-redux'
import { editUserData } from '../../store/actions/actionsUser'
import { graphql } from 'react-apollo'
import { editUser } from '../../queries/mutations'


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
    isFormTouched: false,
    erorrStatus: false,
    formControls: createFunctionControl(),
    isOpen: false
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
      isFormValid: validateForm(formControls),
      isFormTouched: true
    })
  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
     
      const control = this.state.formControls[controlName]
      return(
        <div className="form__row-wrap" key={controlName + index}>
          <label htmlFor={control.type + index}>{control.placeholder}</label>
          <Input
            inputId={control.type + index}
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

  saveUserData = () => {
    console.log('klick')
    const {name, surName, mail, password, repeatPassword} = this.state.formControls 
    
    if (password.value !== repeatPassword.value) {
      console.log('ПАроли не совпадают')
      this.setState({
        erorrStatus: !this.state.erorrStatus,
        
      })
    } else {
      const newUserData = {
        id: +localStorage.getItem('userId'),
        firstName: name.value,
        secondName: surName.value,
        email: mail.value,
        password: password.value
      }

      this.props.editUserData(newUserData, this.props.mutate, this.props.token)

      this.setState({
        isFormTouched: false
      })
    }

  }

  menuToogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateValue = () => {
    const control = this.state.formControls

    Object.keys(control).map((item) => {

      if(control[item].placeholder === 'Имя') control[item].value = this.props.userDataValue.firstName
      if(control[item].placeholder === 'Фамилия') control[item].value = this.props.userDataValue.secondName
      if(control[item].placeholder === 'Электронная почта') control[item].value = this.props.userDataValue.email
      
      return control
   })

    this.setState({
      formControls: control
    })
  }

  componentDidMount() {
    this.updateValue()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  submitHandler = event => {
    event.preventDefault()
  }

  transformToUppercase = str => {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }

  render() {
    console.log(this.props)
    return(
      <div className="User-page__body">
          <PageMenu 
            menuToogle = {this.menuToogle}
            isOpen = {this.state.isOpen}
          />
        <div className="User-page__container">
          <div className="User-page__header">
            <div className="header__user-name">
              <span>{this.transformToUppercase(this.props.userDataValue.firstName)} {this.transformToUppercase(this.props.userDataValue.secondName)}. Редактирование</span>
            </div>
            <div className="header__button">
              <button 
                className="User-page btn btn_color-yellow"
                onClick={this.saveUserData}
                disabled={!this.state.isFormTouched}
                >Сохранить</button>
            </div>
          </div>
          <form className="User-page__form" onSubmit={this.submitHandler}>

            {this.renderInputs()}
            
          </form>
        
        </div>
      
      </div>
    )
  }
}

const UserPageQuery = graphql(editUser)
  (UserPage)

function mapStateToProps(state) {
  return{
    token: state.userData.token,
    userDataValue: state.userData.user
  }
}

function mapDispatchToProps(dispatch) {
  return{
    editUserData: (newUserData, mutate) => dispatch(editUserData(newUserData, mutate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPageQuery)