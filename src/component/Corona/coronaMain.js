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
        current_cancer: false, // 2
        Weakened_immune: false, // 4
        obesity: false, // 3
        diabetes: false, // 2
        fever: false, // 8
        cough: false, // 8
        cardiovascular: false, // 2
        lung_disease: false, // 5
        chronic_liver: false, // 3
        chronic_kidney: false, // 3
        shortness_of_breath : false, // 8
        fever_over: "low", // low -> 1 medium->2 high->3
        worsening_of_symptom: false, // 8
        fast_breathing: false, // 10
        speaking_prob: false, // 2
        coughing_up_blood: false, // 8
        age : 0, //  > 18 -> 3, <18 -> 6, <10, 7 
        gender : "male",
        chances: 0,
        fatigue: false, // 8
        muscle_pain: false, // 3
        headache: false, // 3
        diarrhea: false, // 3
        Nausea: false, // 3
        sore_throat: false, // 2
        runny_nose: false, // 1
        vomiting: false, // 3
        lack_of_appeitite: false, // 2
        over_sleepy: false // 2
        // total: 116
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
        // console.log(e.target.value)
        // console.log(this.state)
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
