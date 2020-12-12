import React, { Component } from 'react'
import right_tick from '../../../images/right_tick.png'
import wrong_tick from '../../../images/wrong_tick.png'

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
            <div>
                <div>
                    <h3>Are your symptom is rapidly worsening</h3>
                    <div className="card">
                        <span onClick={this.setVlaueTrue}>
                            <img src={right_tick} alt="yes"/>
                            <p>YES</p>
                        </span>
                        <span onClick={this.setVlaueFalse}>
                            <img src={wrong_tick} alt="no"/>
                            <p>No</p>
                        </span>
                    </div>
                </div>

                <div>
                    <button onClick={this.previous}>
                        PREV
                    </button>
                    <button onClick={this.continue}>
                        NEXT
                    </button>
                </div>
            </div>
        )
    }
}

export default QuestionSeven
