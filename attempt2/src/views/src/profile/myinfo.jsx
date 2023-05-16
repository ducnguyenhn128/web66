import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles.css'
import ProfileNavigation from './profileNavi';

import React, { useState } from 'react';

const MyInfo = () => {
    return (  
        <div className="d-flex">
            {/* Navigation */}
            <ProfileNavigation />
            
            {/* Right column: Profile picture, info ... */}
            <div className="col-9 bg-light">
                {/* Profile picture */}
                <div className='profile-myInfo-allphoto'>
                    {/* Cover photo */}
                    <div style={{backgroundColor: '#c9ebea', height: '250px'}} className='mx-auto col-12'>

                    </div>
                    <button>Change Cover photo</button>
                    {/* Profile picture */}
                    <div className='d-flex'>
                        <div className='mx-3'>
                            <div className='profile-myInfo-avt mb-2'>
                            </div>
                            <button>Change Profile picture</button>

                        </div>
                        
                        <div>
                            Full Name
                        </div>
                    </div>
                    
                </div>
                {/* Form change Infomation */}
                <Form className='col-6 mx-auto mt-5' >
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="username" 
                            // onChange={handleChange}
                            // value={newPass.currentpass || ''}
                            name='username'
                        />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="address" 
                            // onChange={handleChange}
                            // value={newPass.newpass || ''}
                            name='address'
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control as="textarea" rows={3} placeholder="bio" 
                            // onChange={handleChange}
                            // value={newPass.confirm || ''}
                            name='bio'
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    );
}
 
export default MyInfo;