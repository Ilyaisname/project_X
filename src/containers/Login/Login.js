import React, {Component} from 'react'
import './Login.css'
import logo from '../../images/logo.png'
import {Switch, Route} from 'react-router-dom'
import LoginForm from './../../components/LoginForm/LoginForm'
import RegistrForm from '../../components/RegistrForm/RegistrForm'



class Login extends Component {



  render() {
    return (
      <div className="Login">
        <h1 className="Login__header"><img src={logo} alt="header__proceset" /></h1>
        <Switch>
           <Route path="/Login" exact component={LoginForm} />
           <Route path="/Registration" exact component={RegistrForm} />
         </Switch>
        
      </div>
    );
  }
}

export default Login