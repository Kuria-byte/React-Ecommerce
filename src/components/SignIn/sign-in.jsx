/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
// CSS
import './signIn.scss'
// Components
import FormInput from '../Form-input/form-input'
import CustomButton from '../CustomButton/CustomButton'
//Libraries
import {auth, signinwithGoogle } from '../../Firebase/Firebase.utils'
import Swal from 'sweetalert2'


export default class SignIn extends Component {
    constructor(props) {

        super(props);


        this.state = {
            name: '',
            email: '',
            show: false
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ name: '', email: '' })
      

        } catch (error) {
            if (error){
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: (error),
                    footer: '<a href>Why do I have this issue?</a>'
                  })
           
                console.log(error)
            }
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

   


    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' > Sign In</CustomButton>
                        <CustomButton onClick={signinwithGoogle} isGoogleSignIn > Google sign in</CustomButton>
                    </div>

                </form>



            </div>
        );
    }
}
