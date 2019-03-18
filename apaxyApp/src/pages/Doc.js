import React, {Component} from 'react';

/** Markdown */
import ReactMarkdown from 'react-markdown';
import Test from './test.txt';
import Testmd from './test.md';


class Doc extends Component {
    
    render() {
        return(
            <div className="container">
                <h1 className="doc text-center">Documentation</h1>
                <ReactMarkdown source={Testmd} />    
            </div>
        )
    }
}

export default Doc