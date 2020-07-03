import React, {Component} from 'react'
import './ProcessList.css'
import PageMenu from '../../components/PageMenu/PageMenu'
import Process from '../../components/Process/Process'
import {connect} from 'react-redux'
import { fetchProcess } from '../../store/actions/actionProcess'


class ProcessList extends Component {

  renderProcess() {
    console.log(this.props)
    return Object.keys(this.props.process).map((process) => {
      const processName = this.props.process[process]
        return (
          <Process
            key={processName.id}
            name={processName.name}
            numberOfExecutions={processName.numberOfExecutions}
            averageLeadTime={processName.averageLeadTime}
            averageActiveTime={processName.averageActiveTime}
            employeesInvolvedProcess={processName.employeesInvolvedProcess}
            numberOfScenarios={processName.numberOfScenarios}
            start={processName.start}
            end={processName.end}
            loading={processName.loading}
            />
        )
    })
  }
  

  render() {
    console.log(this.props.process)
    return(
      <div className="ProcessList__body">
        <PageMenu />
          <div className="ProcessList__container">
            {this.props.loading && this.props.process.length !== 0 ?
              <h3 style = {{textAlign: "center"}}> Загрузка </h3>
              : this.renderProcess()
            }
            
            
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    process: state.processes.process,
    loading: state.processes.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProcess: () => dispatch(fetchProcess()) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProcessList)