import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'


/** Component */
import {Footer } from './components';

/** Image */
import logo from './images/logo/apaxy-v2.svg';
import github from './images/fontawesome/github.svg'
import docker from './images/fontawesome/docker.svg'

/** Pages */
import { Apaxy, Icon, Doc } from './pages'



class App extends Component {


  render () {
    return (
        
        <Fragment>
        {/* like index.js - default page that are implemented in all pages */}
        
          <Router>
            <header>
              <nav className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar fixed-top mb-5" >
                  <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                      <NavLink className="navbar-brand" to="/">
                        <img className="logo" src={logo} alt={logo}/>
                      </NavLink>
                      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/icon">Icon</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink className="nav-link" to="/doc">Doc</NavLink>
                        </li>
                      </ul>
                      <ul className="my-auto">
                        <li className="nav-item  d-inline-block">
                          <a className="nav-link" href="https://hub.docker.com/r/fusengine/apaxy" target="_blank">
                            <img className="dev" src={docker} alt={docker}/>
                          </a>
                        </li>
                        <li className="nav-item d-inline-block">
                          <a className="nav-link" href="https://github.com/fusengine/apaxy-v2" target="_blank">
                            <img className="dev" src={github} alt={github}/>
                          </a>
                        </li>
                      </ul>
                  </div>  
                </div>
              </nav>
            </header>

            {/* Margin top because of the navbar */}
            <div className="margintop"></div>


            {/* Here come the containt of the page */}


            {/* Select page for each path */}
            <Switch>
              <Route exact path="/" component={Apaxy}></Route>
              <Route path="/icon" component={Icon}></Route>
              <Route path="/doc" component={Doc}></Route>
              <Route path="https://hub.docker.com/r/fusengine/apaxy"></Route>
              <Route path="https://github.com/fusengine/apaxy-v2"></Route>
              {/* <Route path="/test" render={()=> { return(<h1>Test</h1>)}}></Route> */}
            </Switch>
          </Router>
        

          <Footer></Footer>
        </Fragment>
        
    )
  }
}
export default App