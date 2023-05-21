import Button from "react-bootstrap/esm/Button";
import './styles.css'
import './comment'
import UserComment from "./comment";
import YourComment from "./yourComment";
import { useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
    const {id} = useParams();
    const URL = 'http://localhost:8000/post/' + id ;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(URL, {
                    withCredentials: true,
                })
                console.log(response.data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchData();
    }, [URL])
    return (  
        <div>
            <div className="text-start mx-auto mt-4 p-3 viewpost">
                {/* user post */}
                <div className="d-flex">
                    <div className="user-comment-avt">

                    </div>

                    <div className="viewpost_info"> 
                        <h5 className="mb-1"><b>Philippe Bernard Victor Troussier </b> </h5>
                        <a href="#">4 giờ</a>
                    </div>
                </div>


                <div className="mt-4">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </div>

                {/* Post stats */}
                <div className="d-flex justify-content-between">
                    <div >
                        55 likes
                    </div>
                    <div>
                        10 bình luận
                    </div>
                </div>

                <hr className="my-2"/>
                <div className="d-flex justify-content-between">
                    <Button className="col-3 "> Like</Button>
                    <Button className="col-3">Comment</Button>
                    <Button className="col-3">Share</Button>        
                </div>
                <hr className="my-2"/>
                {/* All comment here */}
                {/* Render a list */}
                <YourComment />
                <UserComment />
                    {/* Your comment */}
            </div>
        </div>
    );
}
 
export default ViewPost;