import Button from "react-bootstrap/esm/Button";
import ViewPost from "../posts";
import MessageFriend from "./messageFriends";
import Header from "../header";

const Homepage = () => {
    return (
        <div>
            <Header />
            <div className="mt-1 d-flex justify-content-between bg-light">
                {/* <h2>Home</h2>
                <Link to='/profile'>Profile</Link> */}
                
                {/* Left Column */}
                <div class='col-2 text-start bg-light left_column '>
                    <h5 class='mt-2 ms-2'>Popular tags</h5>

                    {/* render a list */}
                    <div class='mt-2 ms-2 '>
                        <div><a href="/">#hashtag1</a> </div>
                        <div><a href="/">#hashtag1</a> </div>
                        <div><a href="/">#hashtag1</a> </div>
                    </div>

                </div>
                
                {/* Center */}
                <div className='col-6  bg-light'>
                    {/* Write a post */}
                    <div class='mt-3 p-3 bg-white d-flex'>
                        <div class='user-avt'>

                        </div>

                        <input 
                            class='p-1 flex-fill border border-dark-subtle rounded bg-light' 
                            placeholder="write your post"> 
                        </input>
                    </div>
                    {/* Order */}
                    <div class="d-flex bg-white my-3 p-3 border border-dark-subtle rounded">
                        <p class="my-auto me-2">Trending</p>
                        <p class="my-auto me-auto">Newest</p>
                        <p class='my-auto'>In Week</p>
                    </div>
                    {/* render a list */}
                    <div class='bg-light'>
                        <ViewPost />
                        <ViewPost />
                        <ViewPost />
                        <ViewPost />
                        <ViewPost />
                    </div>
                </div>
                
                {/* Right column */}
                <div class='col-2 text-start bg-light right_column mt-2'>
                    <p>Người liên hệ</p>
                    {/* Render a list */}
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />
                    <MessageFriend />

                </div>
            </div>  

        </div>
    );
}
 
export default Homepage;