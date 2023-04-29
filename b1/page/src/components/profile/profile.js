import React from 'react';
import {Container, Row, Col, Nav, NavLink, Button} from 'reactstrap'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import trump from './../../img/trump.jpg'
const Profile = () => {
    return (  
        <Container>
            <Row>
                <Col xs={3}>
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <img src={trump} alt='donald'></img>
                        <h3 className="text-center">Donald Duck </h3>
                        <p className="text-center">Hanoi Vietnam</p>                 
                    </div>

                    <div className='profile-more'>
                        <Nav className='mb-1'>Profile</Nav>
                        <Nav className='mb-1'>Posts</Nav>
                        <Nav className='mb-1'>Follows</Nav>
                        
                        <hr />
                        <Nav className='mb-1'>My Info</Nav>
                        <Nav className='mb-1'>Privacy</Nav>
                        <Nav className='mb-1'>Password</Nav>

                    </div>
                </Col>  

                <Col xs={9}>
                    {/* Statistic */}
                    <Row>
                        <Col>
                            <div className ='post-stas'>
                                <h3>10</h3>
                                <div>Posts</div>
                            </div>
                        </Col>
                        <Col>
                            <div className ='post-stas'>
                                <h3>185</h3>
                                <div>Likes</div>
                            </div>
                        </Col>
                        <Col>
                            <div className ='post-stas'>
                                <h3>67</h3>
                                <div>Comments</div>
                            </div>                        
                        </Col>
                        <Col>
                            <div className ='post-stas'>
                                <h3>10</h3>
                                <div>Followers</div>
                            </div>                           
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <Col className='px-0'><h3 >Recent Posts</h3></Col>
                        <Col>
                            <NavLink style={{ textAlign: 'right', marginTop: '10px' }}>View All &gt;&gt;</NavLink>
                        </Col>
                    </Row>
                    {/* Posts here */}
                    <Row>
                        <div className ='post'>
                            <p>The woods are lovely, dark and deep, <br />
                                But I have promises to keep, <br />
                                And miles to go before I sleep, <br />
                                And miles to go before I sleep. <br />
                            </p>
                            <p>20 likes   5 comments</p>
                            <p>#hashtag1 #hashtag2</p>
                        </div>

                        <div className ='post'>
                            <p>Hope is the thing with feathers <br />
                                That perches in the soul, <br />
                                And sings the tune without the words, <br />
                                And never stops at all <br />
                            </p>
                            <p>20 likes   5 comments</p>
                            <p>#hashtag1 #hashtag2</p>
                        </div>
                    </Row>
                    {/* Navigation */}
                    <Row>
                        <Col style={{ textAlign: 'right'}}>
                            <Button > &lt;&lt; Prev Page</Button>
                        </Col>
                        <Col>
                            <Button>Next Page &gt;&gt;</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        // <p className='fs-1'>Test</p>
    );
}
 
export default Profile;