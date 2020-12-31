import React, { Component } from 'react'
import './question.css'
import { Link } from 'react-router-dom'
export class QuestionSix extends Component {
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
                    <h3>Do you have any of the following symptoms? {"\n"}</h3>
                    <h3>
                        Please only select new symptoms that are not related {"\n"} 
                        to your chronic diseases.</h3><br></br>
                    <p >Select one answer in each row.</p>
                    <span className='ques'>
                        <p>Are you breathing very fast?</p>
                        <div className="chk">
                        <p>Yes
                        <input type="radio" name="fast_breathing" className="chkb"
                            value={true} onChange={handleChanges("fast_breathing")}/>
                        No
                        <input type="radio" name="fast_breathing" className="chkb"
                            value={false} onChange={handleChanges("fast_breathing")}/></p>
                        </div>
                    </span>


                    <span className='ques'>
                        <p>Do you have trouble speaking comfortably
                          in complete<br></br> sentences because of breathing problems?</p> 
                          <div className="chk"> 
                        <p>Yes
                        <input type="radio" name="speaking_prob" className='chkb'
                            value={true} onChange={handleChanges("speaking_prob")}/>
                        No
                        <input type="radio" name="speaking_prob"  className='chkb'
                            value={false} onChange={handleChanges("speaking_prob")}/></p>
                            </div>
                    </span>


                    <span className='ques'>
                        <p>Do you feel confused or disorientated,
                             i.e., do you feel like you <br></br>don't know 
                             where you are, or you are overly sleepy</p>
                        <div className="chk">
                        <p>Yes
                        <input type="radio" name="over_sleepy"  className='chkb'
                            value={true} onChange={handleChanges("over_sleepy")}/>
                        No
                        <input type="radio" name="over_sleepy" className='chkb'
                            value={false} onChange={handleChanges("over_sleepy")}/></p></div>
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

export default QuestionSix
