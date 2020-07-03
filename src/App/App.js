import React, {Component} from 'react';
import Layout from '../hoc/Layout/Layout'
import Login from '../containers/Login/Login'

import UserPage from '../containers/UserPage/UserPage'
import ProcessList from '../containers/ProcessList/ProcessList'


class App extends Component {
  state = {
    isLoginOk: true,
    isUserActive: false,
    isMenuClick: false
  }

  render() {
    return (
      <Layout>
        
        {this.state.isLoginOk ? <Login /> : null}
        {this.state.isUserActive ? <UserPage /> : null}
        {this.state.isMenuClick
          ? <ProcessList /> 
          : null
        }
        
      </Layout>
    )
  }
}

export default App
