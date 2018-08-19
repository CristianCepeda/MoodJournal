import React, { Component } from 'react';
import NavbarComponent from './Components/NavbarComponent.js';
import CalendarPageComp from './Pages/CalendarPageComp.js';
import SelectionPageComp from './Pages/SelectionPageComp.js';
import LandingPageContainer from './Pages/LandingPageContainer.js';
import PageNotFoundComp from './Pages/PageNotFoundComp.js';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './styles/App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     auth: false
  //   }
  // }

  // updateAuth = (auth) => {
  //   this.setState({auth: auth});
  // }

  render() {
    // This is made intentionally to conflict!
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarComponent currentAuth={ this.props.auth} updateAuth={this.props.updateAuth} />
            <Switch>
              <Route exact path="/" render={props => <LandingPageContainer auth = {this.props.updateAuth} />} />
              <Route path="/welcome" render={props => <LandingPageContainer auth = {this.props.updateAuth} />} />
              <Route path="/calendar" component={CalendarPageComp}/>
              <Route path="/selection" component={SelectionPageComp}/>
              <Route component={PageNotFoundComp} />
            </ Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// Tell redux what part of state you want
// made available inside this component via this.props
const mapStateToProps = (state) => { return {auth: state.auth}; };

// Setup dispatching capabilities for this component
// so it may execute actions that will update state
// by dispatching actions
const mapDispatchToProps = (dispatch) => { 
  return {
    updateAuth: (val) => { dispatch({type: 'AUTH_ACTION', val: val}) }
  }; 
};

// Give this component access to the redux managed state
export default connect(mapStateToProps, mapDispatchToProps)(App);
