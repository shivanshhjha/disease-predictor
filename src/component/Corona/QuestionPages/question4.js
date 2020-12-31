import React, { Component } from 'react'
import './question.css'
import { Link } from 'react-router-dom'
export class QuestionFour extends Component {

    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    previous = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    render() {

        const {values, handleChanges} = this.props

        return (
            <div className='container'>
                <div className="navbar"><Link to="/" className="link-to-home">Disease </Link></div>
                <div className='ques-main'>
                    <h3>Do you have any of the following symptoms?</h3>
                    <span  className='ques'>
                        <p>Fatigue</p>
                        <input type="checkbox" name="" value={!values.fatigue}
                            onChange={handleChanges("fatigue")} />
                    </span>

                    <span className='ques'>
                        <p>Muscle pain</p>
                        <input type="checkbox" name="" value={!values.muscle_pain}
                            onChange={handleChanges("muscle_pain")} />
                    </span>
                    <span className='ques'>
                         <p>Headache</p>
                        <input type="checkbox" name="" value={!values.headache}
                            onChange={handleChanges("headache")} />
                    </span>

                    <span className='ques'>
                        <p>Diarrhea</p>
                        <input type="checkbox" name="" value={!values.diarrhea}
                            onChange={handleChanges("diarrhea")} />
                    </span>

                    <span className='ques'>
                        <p>Nausea</p>
                        <input type="checkbox" name="" value={!values.Nausea}
                            onChange={handleChanges("Nausea")} />
                    </span>
                    <span className='ques'>
                    <p>Sore throat</p>
                        <input type="checkbox" name="" value={!values.sore_throat}
                            onChange={handleChanges("sore_throat")} />
                    </span>

                    <span className='ques'>
                      <p>Runny nose</p>
                        <input type="checkbox" name="" value={!values.runny_nose}
                            onChange={handleChanges("runny_nose")} />
                    </span>

                    <span className='ques'>
                        <p>Vomiting</p>
                        <input type="checkbox" name="" value={!values.vomiting}
                            onChange={handleChanges("vomiting")} />
                    </span>
                    <span className='ques'>
                    <p>Lack of appetite</p>
                        <input type="checkbox" name="" value={!values.lack_of_appeitite}
                            onChange={handleChanges("lack_of_appeitite")} />
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

export default QuestionFour
