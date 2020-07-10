import React, {Component} from 'react';
import Layout from '../hoc/Layout/Layout'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from '../containers/Login/Login'
import UserPage from '../containers/UserPage/UserPage'
import ProcessList from '../containers/ProcessList/ProcessList'
import { connect } from 'react-redux';



class App extends Component {

 

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Registration" component={Login} />
      </Switch>
    )

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
            <Route path="/user-page" component={UserPage} />
            <Route path="/process" component={ProcessList} />
            <Redirect to="/user-page" />   
      </Switch>
      )
    }
    return (
      <Layout>

        {routes}

      </Layout>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    isAuthenticated: !!state.userData.token
  }
} 

export default connect(mapStateToProps)(App)
