import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const Login = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const navigate=useNavigate()

    const location=useLocation();
    let from=location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      if(user){
          navigate(from,{replace:true});
      }

    const handleForm=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }

    const navigateSignUp=event=>{
            navigate('/signup');
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-dark text-center mt-2'>PLEASE LOGIN</h2>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't have an account? <Link to="/signup" className='text-primary text-decoration-none'onClick={navigateSignUp}>Create an account</Link></p>
            <Social></Social>
        </div>
    );
};

export default Login;