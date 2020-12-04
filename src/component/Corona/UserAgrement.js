import React, { Component } from 'react'
import {  RaisedButton } from 'material-ui'
import { MuiThemeProvider } from 'material-ui/styles'

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
                <div>
                   <h1>User Agrement</h1>
                   <h2>Terms of Service</h2>
                   <p>Before using the Checkup, 
                       please read the Terms of
                        Service. Remember that:</p>
                    <ol>
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
                        </li>
                        <li>
                            If this is an emergency, 
                            call your local emergency 
                            number immediately. Do not 
                            proceed with this Checkup tool.
                            Medical attention is required immediately.
                        </li>
                        <li>
                            Your data is safe. Information 
                            that you provide is anonymous 
                            and not shared with anyone.
                        </li>
                    </ol>
                    <input
                        
                        type="checkbox"
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    /><p>I have read all the points</p>
                    
                    <RaisedButton 
                        label="PREV"
                        onClick={this.previous}
                    />
                    <RaisedButton 
                        disabled={!this.state.checked}
                        label="NEXT"
                        onClick={this.continue}
                    />
               </div>
            </MuiThemeProvider>     
               
        )
    }
}

export default UserAgrement
