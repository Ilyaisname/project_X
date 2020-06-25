import React, {Component} from 'react'
import './ProcessList.css'
import PageMenu from '../../components/PageMenu/PageMenu'
import Process from '../../components/Process/Process'

class ProcessList extends Component {
  render() {
    return(
      <div className="ProcessList__body">
        <PageMenu />
          <div className="ProcessList__container">
            {/* component */}
            <Process />
          </div>
      </div>
    )
  }
}

export default ProcessList