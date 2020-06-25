import React from 'react'
import './PageMenu.css'
import menu from '../../images/menu_icon.png'

export default () => {
  return (
    <div className="Menu__container">
      <div className="Menu__wrap">
        <span className="Menu__icon"><img src={menu} alt="menu_icon"/> </span>
        <span className="Menu__text">Меню</span>
      </div>
    </div>
  )
}