import React, { Component } from 'react';
import { Header, Footer, Icon } from '../components';

import IconsJson from '../json/icons.json'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render () {
    return (
        <div>
        {/* like index.js - default page */}
          <Header></Header>
          
  

          <Footer></Footer>
        </div>
    )
  }
}
export default App