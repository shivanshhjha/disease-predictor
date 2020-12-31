import React, { Component } from 'react'
import {  RaisedButton } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'
import './corona.css'
import { Link } from 'react-router-dom'
export class UserAgrement extends Component {
     
    state = { checked: false }

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked })
    }

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    previous = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        return (     
            <MuiThemeProvider >
                <div className='app'>
                <div className="navbar"><Link to="/" className="link-to-home">Disease </Link></div>
                <div className="box">
                <div className="header">User Agrement</div>
                <br></br><br></br><br></br>
                   <h2>Terms of Service</h2> <br></br>
                   <p className="mrgn">Before using the Checkup, 
                       please read the Terms of
                        Service. Remember that:</p><br></br>
                    <ol className="mrgn">
                        <li>
                            Checkup is not a diagnosis. 
                            Checkup is for informational
                            purposes only and does not 
                            represent, in any way, a 
                            qualified medical opinion. 
                            Checkup and its potential 
                            results are entirely based 
                            on WHO and CDC guidelines 
                            concerning COVID-19 only.
                        </li><br></br>
                        <li>
                            If this is an emergency, 
                            call your local emergency 
                            number immediately. Do not 
                            proceed with this Checkup tool.
                            Medical attention is required immediately.
                        </li><br></br>
                        <li>
                            Your data is safe. Information 
                            that you provide is anonymous 
                            and not shared with anyone.
                        </li><br></br>
                    </ol>
                    <p><input
                        
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />     I have read all the points</p><br></br>
                    
                    
                    <button className="lbtn" onClick={this.previous}>PREV</button>
                    <button className="rbtn" onClick={this.continue}>NEXT</button>  
                    </div>
               </div>
            </MuiThemeProvider>     
               
        )
    }
}

export default UserAgrement
