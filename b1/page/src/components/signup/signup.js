import React from 'react';
import './styles.css'

const SignUp = () => {
    return (  
        <div className='SignUp-form'>
            <label>Email</label> <br />
            <input type='email' placeholder='Email'></input> <br />
            <label>Passsword</label> <br />
            <input type='text' placeholder='Passsword'></input> <br />
            <label>Confirm Passsword</label> <br />
            <input placeholder='Confirm password'></input>
        </div>
    );
}
 
export default SignUp;