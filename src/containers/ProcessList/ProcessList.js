import React, {Component} from 'react'
import './ProcessList.css'
import PageMenu from '../../components/PageMenu/PageMenu'
import Process from '../../components/Process/Process'
import {connect} from 'react-redux'
import { fetchProcess } from '../../store/actions/actionProcess'
import { graphql } from 'react-apollo'
import { processList } from '../../queries/queries'



class ProcessList extends Component {
  state = {
    isOpen: false
  }

  renderProcess() {
    return Object.keys(this.props.data.processList).map((process) => {
      const processName = this.props.data.processList[process]
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

  
  menuToogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentWillMount() {
    this.props.fetchProcess(this.props)
  }

  render() {
    return(
      <div className="ProcessList__body">
          <PageMenu 
            menuToogle = {this.menuToogle}
            isOpen = {this.state.isOpen}
          />
          <div className="ProcessList__container">
            {this.props.data.loading && this.props.data.processList === undefined ?
              <h3 style = {{textAlign: "center"}}> Загрузка </h3>
              : this.renderProcess()
            }
          </div>
      </div>
    )
  }
}

const ProcessListQuery = graphql(processList)(ProcessList)

function mapStateToProps(state) {
  return {
    process: state.processes.process,
    loading: state.processes.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProcess: (param) => dispatch(fetchProcess(param)) 
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProcessListQuery)