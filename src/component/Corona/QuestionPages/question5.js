import React, { Component } from 'react'

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
            <div>
                <div>
                    <h3>How high is your fever?</h3>
                    <span style={{display: "flex"}}>
                        <input type="radio" name="fever" value="low"
                            onChange={handleChanges("fever")}/>
                        <p>37.5°C - 38°C (99.5°F - 100.4°F)</p>
                    </span>
                    <span style={{display: "flex"}}>
                        <input type="radio" name="fever" value="medium"
                                onChange={handleChanges("fever")}/>
                            <p>38.1°C - 40°C (100.5°F - 104°F)</p>
                    </span>
                    <span style={{display: "flex"}}>
                        <input type="radio" name="fever" value="high"
                            onChange={handleChanges("fever")}/>
                        <p>Greater than 40°C (104°F)</p>

                    </span>
                    <span style={{display: "flex"}}>
                        <input type="radio" name="fever" value="medium"
                            onChange={handleChanges("fever")}/>
                        <p>I haven’t measured</p>
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

export default QuestionFive
