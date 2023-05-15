import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './styles.css'
const SignIn = () => {
    return (
        <div className='SignIn col-6 mx-auto'>
            <h2 className="mb-3 mt-3">Sign In</h2>
            <Form className='col-9 mx-auto'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Sign In to your account
                </Button>
                <p className='mt-3'>Register now</p>
            </Form>
        </div>
    );
}
 
export default SignIn;