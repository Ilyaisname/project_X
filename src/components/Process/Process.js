import React from 'react'
import './Process.css'
import '../../css/fontello.css'

export default (props) => {
  return(
    <div className="Process__container">
      <div className="Process__header">
        <h2 className="header__text">
          Рассмотрение кредитной заявки
        </h2>  
        <span className="header__href">
          На карту процесса
        </span>
      </div>
      <div className="Process__wrap">
        <div className="Process__counter">
          <span className="_icon"><i className="demo-icon icon-svg_counter"></i></span>
          <span className="counter__number">340 487</span>
        </div>
        <div className="Process__time coll">
          <div className="time">
            <span className="_icon"><i className="demo-icon icon-time_time"></i></span>
            <span className="time__time">10ч 36 мин</span>
          </div> 
          <div className="time">
            <span className="_icon"><i className="demo-icon icon-sr_time"></i></span>
            <span className="time__percent">1ч 7 мин (10,5%)</span>
          </div>
        </div>
        <div className="Process__persons coll">
          <div className="persons">
            <span className="_icon"><i className="demo-icon icon-people"></i></span>
            <span className="persons__sum">120 сотрудников</span>
          </div> 
          <div className="persons">
            <span className="_icon"><i className="demo-icon icon-scripts"></i></span>
            <span className="persons__scripts">129 сценариев</span>
          </div>
        </div>
        <div className="Process__date coll">
         <div className="date__wrap">
            <span className="date__start">Начало</span>
            <span className="date__date-number">11 ноября 2017</span>
         </div>
         <div className="date__wrap">
            <span className="date__end">Окончание</span>
            <span className="date__date-number">6 января 2018</span>
         </div>
         <div className="date__wrap">
            <span className="date__loading">Загрузка</span>
            <span className="date__date-number">10 января 2018</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}