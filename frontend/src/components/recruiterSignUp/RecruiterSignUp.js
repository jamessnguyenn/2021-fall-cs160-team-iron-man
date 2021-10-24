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
                {firstStep? <StepOneRecruiterSignUp secondStep={secondStep} 
                    setValue={setValue} firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>:
                    <StepTwoRecruiterSignUp setValue={setValue} company={company} description={description} logoLink={logoLink} website={website} />
                }
            </>
         )
}

export default RecruiterSignUp;