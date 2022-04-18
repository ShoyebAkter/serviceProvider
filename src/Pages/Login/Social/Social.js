import React from 'react';
import google from "../../../trainers/google.png"
import github from "../../../trainers/github.png"
import facebook from "../../../trainers/fb.png"
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate=useNavigate();
    let errorMsg;

    if(user){
        navigate('/home');
    }

    if (error) {
        
         errorMsg= <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
    return (
        <div>
            <div className='d-flex  align-items-center'>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-dark w-50'></div>
            </div>
            {errorMsg}
            <div>
                <button onClick={()=> signInWithGoogle()} className='btn btn-dark mx-2'>
                    <img style={{height:"20px",width:"20px"}} className='mx-2' src={google} alt=''></img>
                    Google sign in
                    </button>
                <button className='btn btn-dark mx-2'>
                    <img style={{height:"20px",width:"20px"}} className='mx-2' src={github} alt=''></img>
                    Github sign in
                    </button>
                <button className='btn btn-dark mx-2'>
                    <img style={{height:"20px",width:"20px"}} className='mx-2' src={facebook} alt=''></img>
                    Facebook sign in
                    </button>
            </div>
        </div>
    );
};

export default Social;