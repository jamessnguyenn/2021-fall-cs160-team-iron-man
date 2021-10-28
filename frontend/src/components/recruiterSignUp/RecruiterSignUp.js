import React, { useState } from "react";
import './RecruiterSignup.css';
import NavBar from '../loggedOutNavBar/NavBar';
import StepOneRecruiterSignUp from "./StepOneRecruiterSignUp";
import StepTwoRecruiterSignUp from "./StepTwoRecruiterSignUp";

function RecruiterSignUp(){
    const[firstStep, setFirstStep] = useState(true)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [logoLink, setLogoLink] = useState('');
    const [website, setWebsite] = useState('');
    

    const setValue = (e)=>{
        switch(e.target.id){
            case 'firstName': 
                setFirstName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
                break;
            case 'email':
                setEmail(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'confirmPassword':
                setConfirmPassword(e.target.value)
                break;
            case 'company':
                setCompany(e.target.value)
                break;
            case 'description':
                setDescription(e.target.value)
                break;
            case 'logoLink':
                setLogoLink(e.target.value)
                break;
            case 'website':
                setWebsite(e.target.value)
                break;
            default:
                console.log("Error")
        }
    }

    // proceed to the second step
    const secondStep = () => {
        setFirstStep(false)
    }
         return (
            <>
             <NavBar/>
              <div className="row mx-auto">
                <div className="col-5 sticky-top recruiter-side-image" style={{ top:"56px"}}>
                <div className="recruiter-signup-bg-img mx-auto"/>
                <h1 className="text-center bottom-align-text" style={{fontSize:"2em", color: "white"}} >Discover New Talent</h1>
                <div className='noAccount d-flex justify-content-center mb-4' style={{ fontSize: '15px', color: 'white',  marginTop:"20px" }}>
                Already have an account? &nbsp;
                <a href='/recruiter/login'  style={{color: "#add8e6"}}>Sign into your account</a>
              </div>
                    </div>
                <div className="col-4 mx-auto">
                
                {firstStep? <StepOneRecruiterSignUp secondStep={secondStep} 
                    setValue={setValue} firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>:
                    <StepTwoRecruiterSignUp setValue={setValue} company={company} description={description} logoLink={logoLink} website={website} />
                }
                </div>
                </div>
            </>
         )
}

export default RecruiterSignUp;