import React, { Component } from 'react';
import Style from './icon.module.css';

class Icon extends Component {
    render() {
        return(
            <div className="col mx-2 my-2 text-center iconGrid">
                <img className=" mx-auto d-block" src={this.props.image} alt="icons"/>
                <h5 className="text-center">{this.props.title}</h5>
            </div>
        )
    }
}
export default Icon