/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import { connect } from 'react-redux'
// CSS
import './signIn.scss'
// Components
import FormInput from '../Form-input/form-input'
import CustomButton from '../CustomButton/CustomButton'
// redux-actions
import { googleSignInStart, emailSignInStart } from '../../Redux/user/user.action'


class SignIn extends Component {
    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;
      
        emailSignInStart(email, password);
    }


    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        console.log(value);
    }




    render() {
        const { googleSignInStart } = this.props;
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
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn > Google sign in</CustomButton>
                    </div>

                </form>



            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({

    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))

})



export default connect(null, mapDispatchToProps)(SignIn);