import React, { Component } from 'react'
import female from '../../../images/download.png'
import male from '../../../images/male.png'
import './question.css'
import { Link } from 'react-router-dom'
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
            <div className='container'>
                 {/* Gender */}
                 <div className="navbar"><Link to="/" className="link-to-home">Disease </Link></div>
                <div className="ques-main">
                   
                <h2>Select Your Gender</h2>
                    <div className="gender-select" style={{display: "flex"}}>
                        <label className="female">
                            <input type="radio" name="gender" value="female"
                                 onClick={handleChanges("gender")}/>
                            <img src={female} style={{height: "150px", margin: "30px"}} />
                            <h3>Female</h3>
                        </label>
                    {/* </div>

                    <div className="gender-select" style={{display: "flex"}}> */}
                        <label className="female">
                            <input type="radio" name="gender" value="male"
                                 onClick={handleChanges("gender")}/>
                            <img src={male} />
                            <h3>Male</h3>
                        </label>
                    </div>

                

                {/* Age */}<br></br><br></br>
                <h2>Enter your age</h2>
                <input className="no"
                placeholder="Enter Your Age"
                onChange={handleChanges("age")}
                type="number"
                defaultValue={values.age}/>

                {console.log(values.age)}
                <br></br><br></br>
                <button className="btn-submit" onClick={this.previous} >BACK</button>
                <button className="btn-submit-r" onClick={this.continue} >NEXT</button>
                </div>
            </div>
        )
    }
}

export default UserAgeAndGender
