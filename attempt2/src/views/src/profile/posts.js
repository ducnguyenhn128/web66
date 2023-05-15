import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import './styles.css'

const Posts = () => {
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
                    <Form.Control type="text" placeholder="Seach post" />
                </Form.Group>
            </Form>
                {/* Posts  */}
                <div className='mt-4'>
                    {/* Recent Post line */}
                    <div className='d-flex justify-content-between mx-2'>
                        <h4>Total Post: 120</h4>    
                        
                    </div>
                    <div className="bg-white text-start mx-2">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="bg-white text-start mx-2">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="bg-white text-start mx-2">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="bg-white text-start mx-2">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>
                    <div className="bg-white text-start mx-2">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    </div>

                    <div>
                        Prev page Next Page
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Posts;