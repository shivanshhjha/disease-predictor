import React, { Component } from 'react'
import female from '../../../images/download.png'
import male from '../../../images/male.png'


export class UserAgeAndGender extends Component {

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
            <>
                 {/* Gender */}
                <div >
                   
                <h2>Select Your Gender</h2>
                    <div className="gender-select" style={{display: "flex"}}>
                        <label className="female">
                            <input type="radio" name="gender" value="female"
                                 onClick={handleChanges("gender")}/>
                            <img src={female} />
                            <h2>Female</h2>
                        </label>
                    </div>

                    <div className="gender-select" style={{display: "flex"}}>
                        <label className="female">
                            <input type="radio" name="gender" value="male"
                                 onClick={handleChanges("gender")}/>
                            <img src={male} />
                            <h2>Female</h2>
                        </label>
                    </div>

                </div>

                {/* Age */}
                <p>Enter your age</p>
                <input 
                placeholder="Enter Your Age"
                onChange={handleChanges("age")}
                type="number"
                defaultValue={values.age}/>

                {console.log(values.age)}

                <button onClick={this.previous} >BACK</button>
                <button onClick={this.continue} >NEXT</button>
                
            </>
        )
    }
}

export default UserAgeAndGender
