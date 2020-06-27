import React from 'react'
import './RegistrForm.css'
import {NavLink} from 'react-router-dom'
import Input from '../UI/Input/Input'

const RegistrForm = (props) => {
  return(
    <div className="rg-Form__container">
      <form className="rg-form">
        <h2 className="Form__header">Регистрация</h2>
        
        <Input type="text" id="name" name="user_name" placeholder="Имя" />  

        <Input type="text" id="surName" name="user_surName" placeholder="Фамилия" />  

        <Input type="email" id="mail" name="user_mail" placeholder="Электронная почта" /> 

        <Input type="password" id="password" name="user_password" placeholder="Введите пароль" />  

        <Input type="password" id="checkPassword" name="user_checkPassword" placeholder="Повторите пароль" />  

        <button className="btn btn_color-yellow sz">Применить и войти</button>

      </form>

      <div className="rg-Form__href">
        <span className="rg-href__text">Уже зарегистрированны? &ensp;<NavLink to="/Login"> Вход</NavLink></span>
      </div>
    </div>
  )
}

export default RegistrForm

