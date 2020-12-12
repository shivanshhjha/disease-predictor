import React, { Component } from 'react'

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
            <div>
                <div>
                    <h3>Do you have any of the following symptoms?</h3>
                    <span>
                        <input type="checkbox" name="" value={!values.fatigue}
                            onChange={handleChanges("fatigue")} />
                            <p>Fatigue</p>
                    </span>

                    <span>
                        <input type="checkbox" name="" value={!values.muscle_pain}
                            onChange={handleChanges("muscle_pain")} />
                            <p>Muscle pain</p>
                    </span>
                    <span>
                        <input type="checkbox" name="" value={!values.headache}
                            onChange={handleChanges("headache")} />
                            <p>Headache</p>
                    </span>

                    <span>
                        <input type="checkbox" name="" value={!values.diarrhea}
                            onChange={handleChanges("diarrhea")} />
                            <p>Diarrhea</p>
                    </span>

                    <span>
                        <input type="checkbox" name="" value={!values.Nausea}
                            onChange={handleChanges("Nausea")} />
                            <p>Nausea</p>
                    </span>
                    <span>
                        <input type="checkbox" name="" value={!values.sore_throat}
                            onChange={handleChanges("sore_throat")} />
                            <p>Sore throat</p>
                    </span>

                    <span>
                        <input type="checkbox" name="" value={!values.runny_nose}
                            onChange={handleChanges("runny_nose")} />
                            <p>Runny nose</p>
                    </span>

                    <span>
                        <input type="checkbox" name="" value={!values.vomiting}
                            onChange={handleChanges("vomiting")} />
                            <p>Vomiting</p>
                    </span>
                    <span>
                        <input type="checkbox" name="" value={!values.lack_of_appeitite}
                            onChange={handleChanges("lack_of_appeitite")} />
                            <p>Lack of appetite</p>
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

export default QuestionFour
