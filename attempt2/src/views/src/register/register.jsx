import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
const Register = () => {
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

        if (newUser.password !== newUser.confirmPass) {
            alert('Password not match');
        }

        else {
            const {username, email, password} = newUser;
            const formData = {username, email, password};
            // send data
            fetch('http://localhost:8000/api/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
              // Handle the response data
              console.log(data);
            })
            .catch(error => {
              // Handle any errors
              console.error(error);
            });
        }
    }

    return (
        <div className='register col-6 mx-auto'>
            <h2 className="mb-3 mt-3">Register an account here</h2>
            <Form className='col-9 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Username" 
                        name='username'
                        onChange={handleChange}
                        value = {newUser.username || ''}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" 
                        name='email'
                        onChange={handleChange}
                        value = {newUser.email || ''}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" 
                        name='password'
                        onChange={handleChange}
                        value = {newUser.password || ''}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" 
                        name='confirmPass'
                        onChange={handleChange}
                        value = {newUser.confirmPass || ''}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
 
export default Register;