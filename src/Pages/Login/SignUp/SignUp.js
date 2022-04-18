import React from 'react';
import './SignUp.css'
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true });
    const navigate=useNavigate();

    const navigateLogin=()=>{
        navigate('/login');
    }
    if(user){
        navigate('/home')
    }

    const handleSignUp=event=>{
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
        const password=event.target.password.value;

        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='register-form'>
            <h3 className='signup'>Sign up</h3>
            <Form onSubmit={handleSignUp}>
                <input type="text" name='name' placeholder='Your name'></input>
                <input type="email" name='email' placeholder='Enter email address'></input>
                <input type="password" name='password' placeholder='Password'></input>
                <input type='submit' value='SignUp'></input>
            </Form>
            <p>Already have an account? <Link to="/login" className='text-primary text-decoration-none'onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default SignUp;