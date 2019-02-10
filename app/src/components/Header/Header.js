import React, { Component } from 'react';
import Style from './Header.module.css'

class Header extends Component {
    render() {
        const {name, age } = this.props

        return(
            <div className={Style.container}>
                <h1 >Hello {name} {age}</h1>
            </div>
        )
    }
}

export default Header