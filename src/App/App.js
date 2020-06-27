import React, {Component} from 'react';
import Layout from '../hoc/Layout/Layout'
import Login from '../containers/Login/Login'

// import UserPage from '../containers/UserPage/UserPage'
// import ProcessList from '../containers/ProcessList/ProcessList'


class App extends Component {
  render() {
    return (
      <Layout>
        <Login />
      </Layout>
    )
  }
}

export default App
