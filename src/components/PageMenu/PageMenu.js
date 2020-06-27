import React from 'react'
import './PageMenu.css'
// import menu from '../../images/menu_icon.png'
import '../../css/fontello.css'

export default () => {
  return (
    <div className="Menu__container">
      <div className="Menu__wrap">
        <span className="Menu__icon"><i className="demo-icon icon-icon_menu"></i> </span>
        <span className="Menu__text">Меню</span>
      </div>
    </div>
  )
}