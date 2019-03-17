import React, {Component} from 'react';

/** Images */
import Logo2 from '../images/logo/apaxy-v2-2.svg'
import Screenshot from '../images/screenshot/ScreenshotApaxy.png'

class Apaxy extends Component {
    render() {
        return(
            <div className="container">
                <img className="logo2 mx-auto d-block" src={Logo2}/>
                <h6 className="text-center">Apaxy v2 is a beautiful interface Apache 2</h6>            
                <img className="screenshot mx-auto d-block" src={Screenshot}/>
            </div>
        )
    }
}

export default Apaxy