import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import './styles.css'

const Follows = () => {
    return (
        <div className="d-flex">
            {/* Navigation */}
            <div className="col-3 bg-success">
                {/* Navigation */}
                <div className='profile-avt'>Avatar</div>
                <h3 className='text-white'>Peter Schikel</h3>

                <div className='profile-navi bg-light col-8 mx-auto py-2'>
                    <p>Profile</p>
                    <p>Post</p>
                    <p>Followes</p>
                    <p>My Info</p>
                    <p>Privacy</p>
                    <p>Password</p>
                </div>
            </div>

            <div className="col-9 bg-light">
                <Form className='mx-2 mt-3'>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Seach user" />
                    </Form.Group>
                </Form>

                {/* Follows  */}
                <div className='d-flex'>
                    {/* Followes */}
                    <div></div>

                    
                </div>
                

                {/* Followings */}
            </div>  
        </div>
    );
}
 
export default Follows;