import React, { Component } from 'react'
import './question.css'
import { Link } from 'react-router-dom'
export class QuestionFive extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    previous = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {

        const {handleChanges} = this.props

        return (
            <div className='container'>
                <div className="navbar"><Link to="/" className="link-to-home">Disease </Link></div>
                <div className='ques-main'>
                    <h3>How high is your fever?</h3>
                    <span className='ques'>
                    <p>37.5°C - 38°C (99.5°F - 100.4°F)</p>
                        <input type="radio" name="fever" value="low"
                            onChange={handleChanges("fever")}/>
                    </span>
                    <span className='ques'>
                    <p>38.1°C - 40°C (100.5°F - 104°F)</p>
                        <input type="radio" name="fever" value="medium"
                                onChange={handleChanges("fever")}/>
                    </span>
                    <span className='ques'>
                    <p>Greater than 40°C (104°F)</p>
                        <input type="radio" name="fever" value="high"
                            onChange={handleChanges("fever")}/>

                    </span>
                    <span className='ques'>
                    <p>I haven’t measured</p>
                        <input type="radio" name="fever" value="medium"
                            onChange={handleChanges("fever")}/>
                    </span>

                <div>
                    <button onClick={this.previous} className='btn-submit'>
                        PREV
                    </button>
                    <button onClick={this.continue} className='btn-submit-r'>
                        NEXT
                    </button>
                </div>
                </div>
            </div>
        )
    }
}

export default QuestionFive
