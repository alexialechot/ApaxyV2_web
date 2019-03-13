import React, { Component } from 'react';
import { Header, Footer} from './components';

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
          <Footer></Footer>
        </div>
    )
  }
}
export default App