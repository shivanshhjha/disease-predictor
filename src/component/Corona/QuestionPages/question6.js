import React, { Component } from 'react'

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
            <div>
                <div>
                    <h3>Do you have any of the following symptoms? 
                        Please only select new symptoms that are not related 
                        to your chronic diseases.</h3>
                    <p>Select one answer in each row.</p>
                    <span style={{display: "flex"}}>
                        <p>Are you breathing very fast?</p>
                        <p>Yes</p>
                        <input type="radio" name="fast_breathing" 
                            value={true} onChange={handleChanges("fast_breathing")}/>
                        <p>No</p>
                        <input type="radio" name="fast_breathing" 
                            value={false} onChange={handleChanges("fast_breathing")}/>
                    </span>


                    <span style={{display: "flex"}}>
                        <p>Do you have trouble speaking comfortably 
                            in complete sentences because of breathing problems?</p>
                        <p>Yes</p>
                        <input type="radio" name="speaking_prob" 
                            value={true} onChange={handleChanges("speaking_prob")}/>
                        <p>No</p>
                        <input type="radio" name="speaking_prob" 
                            value={false} onChange={handleChanges("speaking_prob")}/>
                    </span>


                    <span style={{display: "flex"}}>
                        <p>Do you feel confused or disorientated,
                             i.e., do you feel like you don't know 
                             where you are, or you are overly sleepy</p>
                        <p>Yes</p>
                        <input type="radio" name="over_sleepy" 
                            value={true} onChange={handleChanges("over_sleepy")}/>
                        <p>No</p>
                        <input type="radio" name="over_sleepy" 
                            value={false} onChange={handleChanges("over_sleepy")}/>
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

export default QuestionSix
