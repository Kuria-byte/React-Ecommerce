import React from 'react'
import SignIn from '../components/SignIn/sign-in'
import Signup from '../components/SignUp/signup'
//styles
import './sign-in-sign-up.scss';

const SignInSignup =() => {

    return (
        <div className="sign-in-and-sign-up">
           <SignIn/>
           <Signup/>
        </div>
    )
}

export default SignInSignup