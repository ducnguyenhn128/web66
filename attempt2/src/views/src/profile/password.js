import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
const Password = () => {
    return (
        <div className="d-flex">
        {/* Navigation */}
        <div className="col-3 bg-success">
            {/* Navigation */}
            <div className='profile-avt'>Avatar</div>
            <h3 className='text-white'>Peter Schikel</h3>

            <div className='profile-navi bg-light col-8 mx-auto py-2 my-3'>
                <p>Profile</p>
                <p>Post</p>
                <p>Followes</p>
                <p>My Info</p>
                <p>Privacy</p>
                <p>Password</p>
            </div>
        </div>

        <div className="col-9 bg-light">
         <div className='register col-6 mx-auto'>
             <h2 className="mb-3 mt-3">Change your password</h2>
             <Form className='col-9 mx-auto'>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Control type="password" placeholder="Current Password" />
                 </Form.Group>


                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Control type="password" placeholder="New Password" />
                 </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Control type="password" placeholder="Confirm Password" />
                 </Form.Group>

                 <Button variant="primary" type="submit">
                     Save
                 </Button>
             </Form>
         </div>
            
        

        </div>
    </div>
    );
}
 
export default Password;

// Done