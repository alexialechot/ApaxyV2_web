import React, { Component } from 'react';
import { Header } from './components';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render () {
    return (
        <div>
          <Header></Header>
        </div>
    )
  }
}
export default App