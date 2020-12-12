import React, { Component } from 'react'

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
            <div>
                <div>
                    <h3>Do you have any of the following symptoms? 
                        Please only select new symptoms that are not related 
                        to your chronic diseases.</h3>
                    <p>Select one answer in each row.</p>
                    <span style={{display: "flex"}}>
                        <p>Fever</p>
                        <p>Yes</p>
                        <input type="radio" name="fever" 
                            value={true} onChange={handleChanges("fever")}/>
                        <p>No</p>
                        <input type="radio" name="fever" 
                            value={false} onChange={handleChanges("fever")}/>
                    </span>


                    <span style={{display: "flex"}}>
                        <p>Cough</p>
                        <p>Yes</p>
                        <input type="radio" name="cough" 
                            value={true} onChange={handleChanges("cough")}/>
                        <p>No</p>
                        <input type="radio" name="cough" 
                            value={false} onChange={handleChanges("cough")}/>
                    </span>


                    <span style={{display: "flex"}}>
                        <p>Shortness of breath</p>
                        <p>Yes</p>
                        <input type="radio" name="shortness_of_breath" 
                            value={true} onChange={handleChanges("shortness_of_breath")}/>
                        <p>No</p>
                        <input type="radio" name="shortness_of_breath" 
                            value={false} onChange={handleChanges("shortness_of_breath")}/>
                    </span>
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

export default QuestionThree
