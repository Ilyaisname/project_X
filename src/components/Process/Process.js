import React from 'react'
import './Process.css'

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
          <span className="counter__icon"></span>
          <span className="counter__number"></span>
        </div>
        <div className="Process__time">
          <div className="time">
            <span className="time__icon"></span>
            <span className="time__time"></span>
          </div> 
          <div className="time">
            <span className="time__icon"></span>
            <span className="time__percent"></span>
          </div>
        </div>
        <div className="Process__persons">
          <div className="persons">
            <span className="persons__icon"></span>
            <span className="persons__sum"></span>
          </div> 
          <div className="persons">
            <span className="persons__icon"></span>
            <span className="persons__scripts"></span>
          </div>
        </div>
        <div className="Process__date">
         <div className="date__wrap">
            <span className="date__start"></span>
            <span className="date__date-number"></span>
         </div>
         <div className="date__wrap">
            <span className="date__end"></span>
            <span className="date__date-number"></span>
         </div>
         <div className="date__wrap">
            <span className="date__loading"></span>
            <span className="date__date-number"></span>
          </div>
        </div>
      </div>
      
    </div>
  )
}