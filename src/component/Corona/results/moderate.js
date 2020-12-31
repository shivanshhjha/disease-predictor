import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moderate from '../../../images/maybe.png'
import './result.css'

export class MaybeCororna extends Component {
    render() {

        const {symtoms} = this.props
        return (
            <div className="app">
                <div className="navbar">
                    <Link to="/" className="link-to-home">
                        Disease
                     </Link>
                </div>
                <div className="box">
                    <div className="header">Result:</div>
                    <img src={moderate} className="uppperImg-mod" alt="img"></img>
                    <h2 className="hh">Symtom Provided</h2>
                    <ul className="box__listOfSymptom">
                        {
                            symtoms.map((item) => 
                            <li>{item}</li>
                            )
                        }
                    </ul>
                <div className="final-statement">
                    {/* <h3>As per the Symtoms provided by you</h3> */}
                    <h1><span className="moderate">Moderate Chances of Corona</span></h1>
                    <p>You have symtoms of corona. We suggest you to be in qurantine.<br>
                    </br>If you are still not sure we advice you to visit testing center</p>
                </div>
                <Link to="/">
                    <button className="myButton">HOME</button>
                </Link>
                </div>
                
            </div>
        )
    }
}

export default MaybeCororna
