import React from 'react'
import './RegistrForm.css'
// import '../LoginForm/LoginForm.css'

const RegistrForm = (props) => {
  return(
    <div className="rg-Form__container">
      <form className="rg-form">
        <h2 className="Form__header">Регистрация</h2>
        
        <input type="text" id="name" name="user_name" placeholder="Имя" />  

        <input type="text" id="surName" name="user_surName" placeholder="Фамилия" />  

        <input type="email" id="mail" name="user_mail" placeholder="Электронная почта" /> 

        <input type="password" id="password" name="user_password" placeholder="Введите пароль" />  

        <input type="password" id="checkPassword" name="user_checkPassword" placeholder="Повторите пароль" />  

        <button className="btn btn_color-yellow sz">Применить и войти</button>
      </form>

      <div className="rg-Form__href">
        <span className="rg-href__text">Уже зарегистрированны? &ensp;<a href="#"> Вход</a></span>
      </div>
    </div>
  )
}

export default RegistrForm

