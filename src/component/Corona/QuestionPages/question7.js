import React, { Component } from 'react'
import right_tick from '../../../images/right_tick.png'
import wrong_tick from '../../../images/wrong_tick.png'
import './question.css'
import { Link } from 'react-router-dom'
export class QuestionSeven extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    previous = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    setVlaueTrue = (e) => {
        e.preventDefault()
        this.props.setTrue()
        console.log(this.props.values)
    }

    setVlaueFalse = (e) => {
        e.preventDefault()
        this.props.setFalse()
        console.log(this.props.values)
    }

    render() {

        const {values, handleChanges} = this.props

        return (
            <div className='container'>
                <div className="navbar"><Link to="/" className="link-to-home">Disease </Link></div>
                <div className="ques-main">
                    <h3>Are your symptom is rapidly worsening</h3>
                    <div className="card">
                        <div onClick={this.setVlaueTrue}>
                        <button onClick={this.continue} className='btn-sub-1'>
                        <img className="ig-l" src={right_tick} alt="yes"/>
                        <p>YES</p>
                        </button>
                            
                        </div>
                        <div onClick={this.setVlaueFalse}>
                        <button onClick={this.continue} className='btn-sub-2'>
                        <img className="ig-r" src={wrong_tick} alt="no"/>
                        <p>NO</p>
                        </button>
                            
                        </div>
                    </div>
                    {/* <div> */}
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <button onClick={this.previous} className='btn-submit'>
                        PREV
                    </button>
                    {/* <button onClick={this.continue} className='btn-submit-r'>
                    <img className="ig-l" src={right_tick} alt="yes"/>
                    </button> */}
                 {/* </div> */}
                </div>

                
            </div>
        )
    }
}

export default QuestionSeven
