import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import Test from './test.txt'
class Doc extends Component {
    
    render() {
       
        return(
            <div className="container">
                <h1 className="doc text-center">Documentation</h1>
                <code> test !!!{Test} </code>
{/* 
                {
                    console.log(return(Test))
                } */}
                
            </div>
        )
    }
}

export default Doc