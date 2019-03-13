import React, { Component } from 'react';
import { Header, Footer, Icon } from './components';

import IconsJson from './json/icons.json'

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

          <div className="my-5">
            <div class="container">
              <div class="row">
                {IconsJson.icons.map(icon => (
                  <div>
                    <Icon image={require('./images/icons/'+ icon.image)} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer></Footer>
        </div>
    )
  }
}
export default App