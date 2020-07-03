import React from 'react'
import './Process.css'
import '../../css/fontello.css'

export default (props) => {
  return(
    <div className="Process__container">
      <div className="Process__header">
        <h2 className="header__text">
          {props.name} 
        </h2>  
        <span className="header__href">
          На карту процесса
        </span>
      </div>
      <div className="Process__wrap">
       <div className="Process__wrap container">
          <div className="Process__counter">
            <span className="_icon"><i className="demo-icon icon-svg_counter"></i></span>
            <span className="counter__number">{props.numberOfExecutions}</span>
          </div>
          <div className="Process__time coll">
            <div className="time">
              <span className="_icon"><i className="demo-icon icon-time_time"></i></span>
              <span className="time__time">{props.averageLeadTime}</span>
            </div> 
            <div className="time">
              <span className="_icon"><i className="demo-icon icon-sr_time"></i></span>
              <span className="time__percent">{props.averageActiveTime}</span>
            </div>
          </div>
       </div>
       <div className="Process__wrap container">
            <div className="Process__persons coll">
              <div className="persons">
                <span className="_icon"><i className="demo-icon icon-people"></i></span>
                <span className="persons__sum">{props.employeesInvolvedProcess} сотрудников</span>
              </div> 
              <div className="persons">
                <span className="_icon"><i className="demo-icon icon-scripts"></i></span>
                <span className="persons__scripts">{props.numberOfScenarios} сценариев</span>
              </div>
            </div>
            <div className="Process__date coll">
            <div className="date__wrap">
                <span className="date__start">Начало</span>
                <span className="date__date-number">{props.start}</span>
            </div>
            <div className="date__wrap">
                <span className="date__end">Окончание</span>
                <span className="date__date-number">{props.end}</span>
            </div>
            <div className="date__wrap">
                <span className="date__loading">Загрузка</span>
                <span className="date__date-number">{props.loading}</span>
              </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}