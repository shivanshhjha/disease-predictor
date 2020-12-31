import React, { Component } from 'react'
import Safe from './results/safe'
import MaybeCororna from './results/moderate';
import HighChance from './results/high';


export class ResultOfCorona extends Component {

    checkCorona = (chance, symtoms) => {
        const {values: {
            current_cancer, // 2
            Weakened_immune, // 4
            obesity,// 3
            diabetes, // 2
            fever, // 8
            cough, // 8
            cardiovascular, // 2
            lung_disease, // 5
            chronic_liver, // 3
            chronic_kidney, // 3
            shortness_of_breath , // 8
            fever_over, // low -> 1 medium->2 high->3
            worsening_of_symptom, // 8
            fast_breathing, // 10
            speaking_prob, // 
            coughing_up_blood, // 8
            age , //> 18 -> 3, <18 -> 6, <10, 7 
            gender ,
            chances, 
            fatigue, // 8
            muscle_pain, // 3
            headache, // 3
            diarrhea, // 3
            Nausea, // 3
            sore_throat, // 2
            runny_nose, // 1
            vomiting, // 5
            lack_of_appeitite, // 5
            over_sleepy, // 2
        }} = this.props 
        if (current_cancer){
            chance += 2;
            // symtoms.push('Cancer')
        }
        if (Weakened_immune){
            chance += 4;
            symtoms.push('Weak Immune')
        }
        if (obesity){
            chance += 3;
            //symtoms.push('Obesity')
        }
        if (diabetes){
            chance += 2;
            //symtoms.push('Diabetes')
        }
        if (fever){
            chance += 8;
            symtoms.push('Fever')
        }
        if (cough){
            chance += 8;
            symtoms.push('Cough')
        }
        if (cardiovascular){
            chance += 2;
            //symtoms.push('Cardiovascular')
        }
        if (lung_disease){
            chance += 5;
            //symtoms.push('Lung Disease')
        }
        if (chronic_liver){
            chance += 3;
            //symtoms.push('Chronic Liver')
        }
        if (chronic_kidney){
            chance += 3;
            //symtoms.push('Chronic kidney')
        }
        if (shortness_of_breath){
            chance += 8;
            symtoms.push('Shortness of Breath')
        }
        if (fever_over == 'low' && fever){
            chance += 1;
        }
        else if (fever_over == 'medium' && fever){
            chance += 2
        }
        else if (fever_over == "high" && fever){
            chance += 3;
        }
        if (worsening_of_symptom ){
            chance += 8;
            symtoms.push('Worsening of symptom')
        }
        if (fast_breathing){
            chance += 8;
            symtoms.push('Fast Breathing')
        }
        if (speaking_prob){
            chance += 2;
            //symtoms.push('Verbal Problem')
        }
        if (coughing_up_blood){
            chance += 8;
            symtoms.push('Coughing up blood')
        }
        if (fatigue){
            chance += 8;
            //symtoms.push('Fatigue')
        }
        if (muscle_pain){
            chance += 3;
            //symtoms.push('Muscle Pain')
        }
        if (headache){
            chance += 3;
            //symtoms.push('Headache')
        }
        if (diarrhea){
            chance += 3;
            //symtoms.push('Diarrhea')
        }
        if (Nausea){
            chance += 3;
            symtoms.push('Nausea')
        }
        if (sore_throat){
            chance += 2;
            //symtoms.push('Sore throat')
        }
        if (runny_nose){
            chance += 1;
            //symtoms.push('Runny nose')
        }
        if (vomiting){
            chance += 3;
            symtoms.push('Vomiting')
        }
        if (lack_of_appeitite){
            chance += 2;
            //symtoms.push('Lack of appeitite')
        }
        if (over_sleepy){
            chance += 2;
            //symtoms.push('Over sleepy')
        }
        return chance

        
    }

    render() {
        let chance = 0;
        var symtoms = []
        chance = this.checkCorona(chance, symtoms)
        console.log(symtoms)
        console.log(chance)
        if (chance < 33){
            //console.log("inside")
            return(
                <Safe 
                symtoms = {symtoms}
                />
            )
        }
        else if ( chance >= 33 && chance < 50){
            return(
                <MaybeCororna 
                symtoms = {symtoms}
                />
            )
        }
        else{
            return(
                <HighChance 
                symtoms = {symtoms}
                />
            )
        }
        
    }
}

export default ResultOfCorona
