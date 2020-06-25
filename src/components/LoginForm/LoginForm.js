import React, {Component} from 'react'
import './LoginForm.css'
import warning from '../../images/warning.png'

export default class LoginForm extends Component {
  render () {
    return(
      <div className="Form__container">
        <form className="form">
          <input type="text" placeholder="Электронная почта" name="login" />

          <input type="password" name="pasword" placeholder="пароль" />
        
          <button className="btn btn_color-yellow">Войти в систему</button>

          <a href="#" className="Login__reg-href">Зарегистрироваться</a>
        
        </form>
        <div className="Form-error">
          <span><img src={warning} alt="warning" /></span>
          <span>Сообщение об ошибке</span>
        </div>
      </div>
    )
  }
}