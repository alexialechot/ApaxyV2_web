import React, { Component } from 'react';
import Style from './Header.module.css';
import logo from '../../images/logo/apaxy-v2.svg';

class Header extends Component {
    render() {
        return(
            <div>
                <div className={Style.container}></div>
                <img className="mx-auto d-block my-5" src={logo} alt="Logo"/>
            </div>
        )
    }
}

export default Header