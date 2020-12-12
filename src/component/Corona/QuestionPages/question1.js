import React, { Component } from 'react'

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
            <div>
                <h1>Symptoms</h1>
                 <div>
                     <h3>
                         Please check all statements
                          that apply to you
                     </h3>
                     <div>
                         <span style={{display:"flex"}}>
                         <input type="checkbox" 
                            name="current_cancer" 
                            checked={values.current_cancer}
                            value={!values.current_cancer}
                            onChange={handleChanges("current_cancer")} />
                            <p>Current Cancer</p>
                         </span>

                         <span style={{display:"flex"}}>
                         <input type="checkbox" 
                            name="Weakened_immune" 
                            checked={values.Weakened_immune}
                            value={!values.Weakened_immune}
                            onChange={handleChanges("Weakened_immune")} />
                            <p>Weakened Immune System</p>
                         </span>

                         <span style={{display:"flex"}}>
                         <input type="checkbox" 
                            name="obesity" 
                            checked={values.obesity}
                            value={!values.obesity}
                            onChange={handleChanges("obesity")} />
                            <p>Obesity</p>
                         </span>

                         <span style={{display:"flex"}}>
                         <input type="checkbox" 
                            name="diabetes" 
                            checked={values.diabetes}
                            value={!values.diabetes}
                            onChange={handleChanges("diabetes")} />
                            <p>Diabetes</p>
                         </span>
                     </div>
                     

                        {/* {console.log(values)} */}
                        
                        <button onClick={this.previous}>PREV</button>
                        <button onClick={this.continue}>NEXT</button>

                 </div>
                 
            </div>
        )
    }
}

export default QuestionOne

