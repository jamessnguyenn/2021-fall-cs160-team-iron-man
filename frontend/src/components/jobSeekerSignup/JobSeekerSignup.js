import React, { Component } from "react";
import StepOneJobSeekerSignUp from "./StepOneJobSeekerSignUp";
import StepTwoJobSeekerSignUp from "./StepTwoJobSeekerSignUp";

class JobSeekerSignUp extends Component {
    state = {
        step: 1
    }
    
    // sets original step to 1
    setDefaultStep = () => {
        const { step } = this.state;  // destructure
        this.setState({ step: 1 });
    }

    // proceed to the second step
    secondStep = () => {
        const { step } = this.state;   // destructure
        this.setState({ step: step + 1 });
    }

    render() {
        const { step } = this.state;

        if (step === 1) {
            return (
                <StepOneJobSeekerSignUp secondStep={this.secondStep} />
            )
        } else if (step === 2) {
            return (
                <StepTwoJobSeekerSignUp />
            )
        }
    }
}

export default JobSeekerSignUp;


