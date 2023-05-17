import { NavLink } from "react-router-dom";
import './styles.css'
const ProfileNavigation = () => {
    return (  
            // Navigation
            <div className="col-3 bg-success">
                <div className='profile-avt'>Avatar</div>
                <h3 className='text-white'>Peter Schikel</h3>

                <div className='profile-navi bg-light col-8 mx-auto py-2 mb-3'>
                    <div className="my-4">
                        <NavLink className='profile_link' to='/profile'>
                            Profile
                        </NavLink>
                    </div>
                    <div className="my-4">
                        <NavLink className='profile_link' to='/profile/posts'>Posts</NavLink>
                    </div>
                    <div className="my-4">
                        <NavLink className='profile_link' to='/profile/follows'>Follows</NavLink>
                    </div>
                    <div className="my-4">
                        <NavLink className='profile_link' to='profile/password'>Password</NavLink>
                    </div>
                    <div className="my-4">
                        <NavLink className='profile_link' to='/profile/privacy'>Privacy</NavLink>
                    </div>
                    <div className="my-4">
                        <NavLink className='profile_link' to='/profile/myinfo'>My Info</NavLink>
                    </div>
                </div>
            </div>
    );
}
 
export default ProfileNavigation;