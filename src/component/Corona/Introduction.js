import React, {Component} from 'react'
import corona from '../../images/coronaImage.png'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'
//import RaisedBottom from 'material-ui/RaisedButton'
import './corona.css'

export class Introduction extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        return (
            <>
               <div className='app'>
                <div className="navbar"><Link to="/" className="link-to-home">Disease </Link></div>          
                <div className="box">
                    <div className="header">Introduction</div>
                    <img src={corona} className="uppperImg" alt="img"></img>
                    <h1 className="hh">Hello!</h1>
                    <p className="content">Our anonymous, reliable WHO-based tool can 
                    help you assess your risk of having COVID-19. By answering
                    a few questions about symptoms, travel and contact with others, 
                    it shows you next steps to take.</p>
                    {/* <RaisedBottom  
                        label="NEXT"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    /> */}
                    <button className="myButton" onClick={this.continue}>NEXT</button>
                </div>
                
             </div> 
            </>
        )
    }
}

export default Introduction