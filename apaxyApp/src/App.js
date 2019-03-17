import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

/** Component */
import { Header, Footer } from './components';

/** Pages */
import { Apaxy, Icon, Doc, Docker } from './pages'

class App extends Component {


  render () {
    return (
        <div>
        {/* like index.js - default page */}
        <Header></Header>
          <Router>
            <NavLink to="/">Apaxy V2</NavLink>
            <NavLink to="/icon">Icon</NavLink>
            <NavLink to="/doc">Doc</NavLink>
            <NavLink to="/docker">Docker</NavLink>
            <NavLink to="https://github.com/fusengine/apaxy-v2" target="_blank">Github Repo</NavLink>
            {/* <NavLink to="/test">test</NavLink> */}
            <Switch>
              <Route exact path="/" component={Apaxy}></Route>
              <Route path="/icon" component={Icon}></Route>
              <Route path="/doc" component={Doc}></Route>
              <Route path="/docker" component={Docker}></Route>
              <Route path="https://github.com/fusengine/apaxy-v2"></Route>
              {/* <Route path="/test" render={()=> { return(<h1>Test</h1>)}}></Route> */}
            </Switch>
          </Router>
        
          <Footer></Footer>
        </div>
    )
  }
}
export default App