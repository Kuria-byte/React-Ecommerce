/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import '../SignIn/signIn.scss'
import FormInput from '../components/Form-input/form-input'
import CustomButton from '../components/CustomButton/CustomButton'

export default class SignIn extends Component {
    constructor(props) {

        super(props);


        this.state = {
            name: '',
            email: ''
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ name: '', email: '' })
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
                    <FormInput type='email' value={this.state.email} name='email' label='email'  autoComplete="new-password"  handleChange={this.handleChange} />
                    <FormInput type='password' value={this.state.password} name='password' label='password' autoComplete="new-password"  handleChange={this.handleChange} />

                  <CustomButton type='submit' > Sign In</CustomButton>

                </form>



            </div>
        );
    }
}
