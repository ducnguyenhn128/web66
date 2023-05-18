import React from 'react';
import { Link } from 'react-router-dom';

const ProfileStas = () => {
    return (  
        <div className="d-flex">

            <div className="col-9 bg-light">
                {/* Statistic */}
                <div className="d-flex d-flex justify-content-between mt-3">  
                    <div className="profile-stats col-2 bg-secondary mx-2">
                        <h3>10</h3>
                        <div>Posts</div>
                    </div>
                    <div className="profile-stats col-2 bg-secondary mx-2">
                         <h3>10</h3>
                         <div>Likes</div>
                     </div>
                     <div className="profile-stats col-2 bg-secondary mx-2 ">
                         <h3>10</h3>
                         <div>Comments</div>
                     </div>
                     <div className="profile-stats col-2 bg-secondary mx-2">
                         <h3>10</h3>
                         <div>Followes</div>
                     </div>
                    
                 </div>
                 {/* Posts  */}
                 <div className='mt-4'>
                     {/* Recent Post line */}
                     <div className='d-flex justify-content-between mx-2'>
                         <h4>Recent Post</h4>    
                         <Link>See more</Link>
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
                 </div>
                
             </div>
            
         </div>
    );
}
 
export default ProfileStas;