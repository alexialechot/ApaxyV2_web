import React, { Component } from 'react';
import logo from '../../images/logo/apaxy-v2.svg';

class Header extends Component {
    render() {
        return(
            <div>
                <div className="footer fixed-top"></div>
                <img className="mx-auto d-block my-5 logo" src={logo} alt="Logo"/>
            </div>
        )
    }
}

export default Header