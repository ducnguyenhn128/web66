// require('dotenv').config();
import React, {useState, useEffect} from 'react';
import Header from '../header';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
const URL1 = 'http://localhost:8000/api/profile';
const URL = 'http://localhost:8000/post'
const NewPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [fullname, setFullname] = useState('')
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL1, {
                    withCredentials: true,
                },
            );
            const user = response.data;
            console.log("Data Response: ", user);
            // Set FullName
            if (user.username) {
                setFullname(user.username)
            }
            if (user.info.fullname) {
                setFullname(user.info.fullname)
            }

            } catch(err) {
                console.error(err);
            }
        }
        fetchData();
    }, )

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const createdAt = new Date();
        const content = {title, body, createdAt, tagList: [] };
        console.log(content);
        try {
            const response = await axios.post(URL, content, {
                withCredentials: true
            });
            console.log(response.data)
        } catch(err) {
            console.log(err);
            
        }
        // reset the form field
        setTitle('');
        setBody('')
    }

    return (
        <div>
            <Header/>
            <br />
            <h3>New post here</h3>
            <h4>{fullname}</h4>
            <Form className='col-6 mx-auto mt-5' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Title" 
                            onChange={handleTitleChange}
                            value={title}
                            name='title'
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control as="textarea" rows={8} placeholder="Write a new post ..." 
                            onChange={handleBodyChange}
                            value={body}
                            name='body'
                        />
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit your post
                    </Button>
                </Form>
            {/* Tag */}
        </div>
    );
}
 
export default NewPost;