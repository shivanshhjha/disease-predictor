import React, { Component } from 'react'
import './question.css'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.css'
export class QuestionOne extends Component {

    continue= (e) => {
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
                <p className="header">Symptoms</p><br></br><br></br>
                     <h3>
                         Please check all statements
                          that apply to you
                     </h3>
                     <div  >
                         <span className='ques'>
                         <p>Current Cancer  {' '}</p>
                         <input type="checkbox" 
                            name="current_cancer" 
                            checked={values.current_cancer}
                            value={!values.current_cancer}
                            onChange={handleChanges("current_cancer")} />
                         </span>

                         <span className='ques'>
                         <p>Weakened Immune System</p>
                         <input type="checkbox" 
                            name="Weakened_immune" 
                            checked={values.Weakened_immune}
                            value={!values.Weakened_immune}
                            onChange={handleChanges("Weakened_immune")} />
                         </span>

                         <span className='ques'>
                         <p>Obesity</p>
                         <input type="checkbox" 
                            name="obesity" 
                            checked={values.obesity}
                            value={!values.obesity}
                            onChange={handleChanges("obesity")} />
                         </span>

                         <span className='ques'>
                         <p>Diabetes</p>
                         <input type="checkbox"
                            name="diabetes" 
                            checked={values.diabetes}
                            value={!values.diabetes}
                            onChange={handleChanges("diabetes")} />
                         </span>
                     </div>
                     

                        {/* {console.log(values)} */}
                        <div>
                        <button onClick={this.previous} className='btn-submit'>PREV</button>
                        <button onClick={this.continue} className='btn-submit-r'>NEXT</button>
                        </div>
                 </div>
                 
            </div>
        )
    }
}

export default QuestionOne

