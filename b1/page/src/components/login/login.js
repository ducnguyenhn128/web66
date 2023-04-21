import React from 'react';
import './styles.css'

const Login = () => {
    return (  
        <div className='login-form'>
            <label>Email</label> <br />
            <input type='email' placeholder='Email'></input> <br />
            <label>Passsword</label> <br />
            <input type='text' placeholder='Passsword'></input> <br />
            <button>Login</button>
        </div>
    );
}
 
export default Login;