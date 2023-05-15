import Dropdown from 'react-bootstrap/Dropdown';


import './styles.css'

const Privacy = () => {
    return (
        <div className="d-flex">
            {/* Navigation Left Column */}
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

            {/* Right Column */}
            <div className="col-9 bg-light">
                {/* Who can view */}
                <div className='d-flex justify-content-between' >
                    <p>Who can view my profile</p>
                    {/* Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>            
                </div>
            </div>
        </div>
    );
}
 
export default Privacy;