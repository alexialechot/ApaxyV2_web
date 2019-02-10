import React, { Component } from 'react';
import Header from './components/Header/Header'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: null,
      age: 30
    }

    setTimeout(() =>{
      this.setState({
        name: 'bruno'
      })
    }, 6000)
  }

  render () {
    const {name, age} = this.state


    return (
    <div>
      <Header name={name} age={age}/>
      
    </div>
  )
  }
}
export default App