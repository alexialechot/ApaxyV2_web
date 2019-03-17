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

          <div className="my-5 icons">
            <div class="container">
              <div class="row align-items-end">
                {IconsJson.icons.map(icon => (
                  <div>
                  {/*Test */}
                    <Icon 
                      image={require('./images/icons/'+ icon.image)} 
                      title={icon.title}
                    />
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