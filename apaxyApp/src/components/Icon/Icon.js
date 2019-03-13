import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return(
            <div class="col">
                <img src={this.props.image} alt="icons"/>
            </div>
        )
    }
}
export default Icon