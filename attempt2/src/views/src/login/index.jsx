import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import cover from '../photo/facebook_cover_photo_1.png'
import { Link } from 'react-router-dom';

// import './styles.css'
const LogIn = () => {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({})
    const handleChange = ({target}) => {
        const {name, value} = target;
        setNewUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const {username, password} = newUser;
        const formData = {username, password};
        // reset Form 
        setNewUser({})
        // send data

        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log(data);
            // navigate('/')
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });  
        }
    
    return (
        <div className='SignIn col-4 mx-auto mt-4'>
             <img src = {cover} alt='cover-logo' style={{width: '400px'}}/>
            <h2 className="mb-3 mt-3">Sign In</h2>
            <Form className='col-9 mx-auto ' onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username" 
                        name='username'
                        onChange={handleChange}
                        value = {newUser.username || ''}
                    />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" 
                        name='password'
                        onChange={handleChange}
                        value = {newUser.password || ''}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In to your account
                </Button>
                <div class='mt-3'>
                    <Link to='/register'>Register now</Link>

                </div>
                {/* <p className='mt-3'>Register now</p> */}
            </Form>
        </div>
    );
}
 
export default LogIn;


