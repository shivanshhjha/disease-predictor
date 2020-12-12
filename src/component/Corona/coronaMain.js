import React, {Component} from 'react'
import { Introduction } from './Introduction'
import UserAgeAndGender from './QuestionPages/UserAgeAndGender'
import UserAgrement from './UserAgrement'
import QuestionOne from './QuestionPages/question1'
import QuestionTwo from './QuestionPages/question2'
import QuestionThree from './QuestionPages/question3'
import ResultOfCorona from './ResultOfCorona'
import QuestionFour from './QuestionPages/question4'
import QuestionFive from './QuestionPages/question5'
import QuestionSix from './QuestionPages/question6'
import QuestionSeven from './QuestionPages/question7'

export class CoronaChecker extends Component {

    state = {
        step: 1,
        current_cancer: false,
        Weakened_immune: false,
        obesity: false,
        diabetes: false,
        fever: false,
        cough: false,
        cardiovascular: false,
        lung_disease: false,
        chronic_liver: false,
        chronic_kidney: false,
        shortness_of_breath : false,
        fever_over: "low",
        worsening_of_symptom: false,
        fast_breathing: false,
        speaking_prob: false,
        coughing_up_blood: false,
        age : 0,
        gender : "male",
        chances: 0,
        fatigue: false,
        muscle_pain: false,
        headache: false,
        diarrhea: false,
        Nausea: false,
        sore_throat: false,
        runny_nose: false,
        vomiting: false,
        lack_of_appeitite: false,
        over_sleepy: false
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

    //set value of worsening_of_symptom 
    setTrue = () => {
        this.setState({
            worsening_of_symptom: true
        })
    }

    setFalse = () => {
        this.setState({
            worsening_of_symptom: false
        })
    }

    // Handle the feilds
    handleChanges = input => e => {
        let updatedValue = e.currentTarget.value;

        if (updatedValue === "true" || updatedValue == "false") {
            updatedValue = JSON.parse(updatedValue);
        }
        this.setState({[input]: updatedValue})
        console.log(e.target.value)
        console.log(this.state)
    }

    render() {
            const {step } = this.state
            
            const {
                current_cancer, Weakened_immune, obesity,diabetes, cardiovascular, 
                chronic_kidney, chronic_liver, cough, shortness_of_breath, fever_over,
                 worsening_of_symptom, fast_breathing, fever,
                coughing_up_blood, gender, age, chances, fatigue, muscle_pain,
                headache, diarrhea, Nausea, sore_throat, runny_nose, vomiting,
                lack_of_appeitite, speaking_prob, over_sleepy
            } = this.state

            const values = {
                current_cancer, Weakened_immune, obesity,diabetes, cardiovascular, 
                chronic_kidney, chronic_liver, cough, shortness_of_breath, fever_over,
                 worsening_of_symptom, fast_breathing, fever,
                coughing_up_blood, gender, age, chances, fatigue, muscle_pain,
                headache, diarrhea, Nausea, sore_throat, runny_nose, vomiting,
                lack_of_appeitite, speaking_prob, over_sleepy
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
                        <UserAgeAndGender 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        handleChanges = {this.handleChanges}
                        />
                    )
                case 4:
                    return(
                        <QuestionOne 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        handleChanges = {this.handleChanges}
                        />
                    )
                case 5:
                    return(
                        <QuestionTwo 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        handleChanges = {this.handleChanges}
                        />
                    )
                case 6:
                    return(
                        <QuestionThree 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        handleChanges = {this.handleChanges}
                        />
                    )
                case 7:
                    return(
                        <QuestionFour
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        handleChanges = {this.handleChanges}
                        />
                    )
                case 8:
                    return(
                        <QuestionFive
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        handleChanges = {this.handleChanges}
                        />
                    )
                case 9:
                    return(
                        <QuestionSix
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        handleChanges = {this.handleChanges}
                        />
                    )

                case 10:
                    return(
                        <QuestionSeven
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                        setTrue = {this.setTrue}
                        setFalse = {this.setFalse}
                        />
                    )
                case 11:
                    return(
                        <ResultOfCorona 
                        values = {values}
                        />
                    )
                default:
                    return (
                        <h1>END</h1>
                    )
            }
    }
    
}

export default CoronaChecker
