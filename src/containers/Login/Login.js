import React, {Component} from 'react'
import './Login.css'
import logo from '../../images/logo.png'
import LoginForm from './../../components/LoginForm/LoginForm'
// import RegistrForm from '../../components/RegistrForm/RegistrForm'


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <a href="#" className="Login__header"><img src={logo} alt="header__proceset" /></a>
        <LoginForm />
        {/* <RegistrForm /> */}
        
      </div>
    );
  }
}

export default Login