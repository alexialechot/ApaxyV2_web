import React, { Component } from 'react';
import { IconGrid } from '../components';

import IconsJson from '../json/icons.json'

class Icon extends Component {
  constructor(props){
    super(props)
    this.state ={
      brunoIcons : IconsJson
    }
  }

  
  render () {
    const {brunoIcons} = this.state
    return (
      <div>
        <div className="my-5 icons">
          <div className="container">
            <div className="row align-items-end">
              {brunoIcons.icons.map((icon, index) => (
                <div>
                {/* Grid of all the icons */}
                  <IconGrid 
                    image={require('../images/icons/'+ icon.image)} 
                    title={icon.title}
                    key={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      )
    }
  }
  export default Icon