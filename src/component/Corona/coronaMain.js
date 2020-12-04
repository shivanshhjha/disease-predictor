import React, {Component} from 'react'
import { Introduction } from './Introduction'
import UserAgeAndGender from './UserAgeAndGender'
import UserAgrement from './UserAgrement'

export class CoronaChecker extends Component {

    state = {
        step: 1,
        cough: false,
        shortness_of_breath : false,
        fever_over: 38,
        worsening_of_symptom: false,
        rapid_breathing: false,
        coughing_up_blood: false
    }

    // proceed to next step
    nextStep = () => {
        // getting step outof state using destructing
        const {step} = this.state
        this.setState({
            step: step+1
        })
    }

    // proceed to prev step
    prevStep = () => {
        // getting step outof state using destructing
        const {step} = this.state
        this.setState({
            step: step-1
        })
    }

    // Handle the feilds
    handleChanges = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
            const {step } = this.state
            
            const {
                cough, shortness_of_breath, fever_over, worsening_of_symptom, rapid_breathing,
                coughing_up_blood
            } = this.state

            const values = {
                cough, shortness_of_breath, fever_over, worsening_of_symptom, rapid_breathing,
                coughing_up_blood
            }

            switch(step) {
                case 1:
                    return(
                        <Introduction 
                            nextStep={this.nextStep}
                        />
                    )
                case 2:
                    return (
                        <UserAgrement 
                         nextStep = {this.nextStep}
                         prevStep = {this.prevStep}
                        />
                    )
                case 3:
                    return (
                        <h1>Question 1</h1>
                    )
                default:
                    return (
                        <h1>END</h1>
                    )
            }
    }
    
}

export default CoronaChecker
