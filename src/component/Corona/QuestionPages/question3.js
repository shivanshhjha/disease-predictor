import React, { Component } from 'react'
import './question.css'
import { Link } from 'react-router-dom'
export class QuestionThree extends Component {

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
                    <h3>Do you have any of the following symptoms? 

                        Please only select new symptoms that are not related 
                        to your chronic diseases.</h3><br></br>
                    <p>Select one answer in each row.</p>
                    <span className='ques'>
                        <p>Fever</p>
                        <div className="chk">
                        <p>Yes
                        <input type="radio" name="fever" className="chkb" 
                            value={true} onChange={handleChanges("fever")}/>
                        No
                        <input type="radio" name="fever" className="chkb"
                            value={false} onChange={handleChanges("fever")}/></p></div>
                    </span>


                    <span className='ques'>
                        <p>Cough</p>
                        <div className="chk">
                        <p>Yes
                        <input type="radio" name="cough" className="chkb" 
                            value={true} onChange={handleChanges("cough")}/>
                        No
                        <input type="radio" name="cough" className="chkb"
                            value={false} onChange={handleChanges("cough")}/></p></div>
                    </span>
                    
                    <span className='ques'>
                        <p>Shortness of breath</p>
                        <div className="chk">
                        <p>Yes
                        <input type="radio" name="shortness_of_breath" className="chkb" 
                            value={true} onChange={handleChanges("shortness_of_breath")}/>
                        No
                        <input type="radio" name="shortness_of_breath" className="chkb"
                            value={false} onChange={handleChanges("shortness_of_breath")}/></p></div>
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

export default QuestionThree
