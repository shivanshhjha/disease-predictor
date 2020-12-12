import React, { Component } from 'react'

export class QuestionTwo extends Component {

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
                            name="cardiovascular" 
                            checked={values.cardiovascular}
                            value={!values.cardiovascular}
                            onChange={handleChanges("cardiovascular")} />
                            <p>Cardiovascular disease</p>
                         </span>

                         <span style={{display:"flex"}}>
                         <input type="checkbox" 
                            name="lung_disease" 
                            checked={values.lung_disease}
                            value={!values.lung_disease}
                            onChange={handleChanges("lung_disease")} />
                            <p>Diagnosed chronic lung disease</p>
                         </span>

                         <span style={{display:"flex"}}>
                         <input type="checkbox" 
                            name="chronic_liver" 
                            checked={values.chronic_liver}
                            value={!values.chronic_liver}
                            onChange={handleChanges("chronic_liver")} />
                            <p>History of chronic liver disease</p>
                         </span>

                         <span style={{display:"flex"}}>
                         <input type="checkbox" 
                            name="chronic_kidney" 
                            checked={values.chronic_kidney}
                            value={!values.chronic_kidney}
                            onChange={handleChanges("chronic_kidney")}
                            />
                            <p>History of chronic kidney disease</p>
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

export default QuestionTwo
