import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
const Register = () => {
    return (
        <div className='register col-6 mx-auto'>
            <h2 className="mb-3 mt-3">Register an account here</h2>
            <Form className='col-9 mx-auto'>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Adderss" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
 
export default Register;