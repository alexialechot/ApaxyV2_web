import React, { Component } from 'react';
import Style from './Header.module.css'

class Header extends Component {
    render() {
        return(
            <div className={Style.container}>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default Header