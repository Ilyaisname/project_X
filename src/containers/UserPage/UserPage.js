import React, {Component} from 'react'
import './UserPage.css'
import PageMenu from '../../components/PageMenu/PageMenu'

class UserPage extends Component {
  
  state = {

  }
  
  renderInputs() {
    
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
              <button className="User-page btn btn_color-yellow">Сохранить</button>
            </div>
          </div>
          <form className="User-page__form">
            
           <div className="form__row-wrap">
              <label>Имя</label>
  
              <input type="text" />
           </div>

          <div className="form__row-wrap">
              <label>Фамилия</label>
  
              <input type="text" />
          </div>

           <div className="form__row-wrap">
              <label >Электронная почта</label>
  
              <input type="email"  />
           </div>

          <div className="form__row-wrap">
              <label>Новый пароль</label>
              
              <input type="password"  />
          </div>
            
           <div className="form__row-wrap">
              <label>Повторите пароль</label>
              
              <input type="password" />
           </div>
            
          </form>
        
        </div>
      
      </div>
    )
  }
}

export default UserPage