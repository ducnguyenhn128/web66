import { Link, Route, Routes} from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar'
import './styles.css'
import { Sidebar, Menu, MenuItem} from 'react-pro-sidebar';
import Password from './password';
import Privacy from './privacy';
import MyInfo from './myinfo';
import Posts from './posts';
import ProfileStas from './profile';
import Header from '../header';
import Follows from './follows';
import { useEffect } from 'react';
import axios from 'axios';
import { useCookies } from "react-cookie";

const Profile = () => {
    useEffect(() => {
        // const response = axios.get(URL);

        console.log(`All cookie: ${cookies}`);
    }, [])

    const [cookies, setCookie] = useCookies();
    const URL = 'http://localhost:8000/api/profile';


    return (
                <ProSidebarProvider>
                    <Header />
                    <Sidebar style={{float: 'left', width: '20%'}}>
                        <Menu>
                            <div style={{width: '100px', height: '100px', backgroundColor: '#6a6b', borderRadius: '100%', margin: '20px auto'}}>

                            </div>
                            <h3>Bùi Phương Linh</h3>
                            <MenuItem component={<Link to='./'/>}> Profile </MenuItem>
                            <MenuItem component={<Link to='./posts'/>}> Posts </MenuItem>
                            <MenuItem component={<Link to='./follows'/>}> Follows </MenuItem>
                            <MenuItem component={<Link to='./passwords'/>}> Password </MenuItem>
                            <MenuItem component={<Link to='./privacy'/>}> Privacy </MenuItem>
                            <MenuItem component={<Link to='./myinfo'/>}> My Info </MenuItem>
                            
                        </Menu>
                    </Sidebar>
                        <main>
                            <Routes>
                                <Route path='/*' element={ <ProfileStas />} /> 
                                <Route path='/passwords' element={ <Password />} />
                                <Route path='/privacy' element={ <Privacy />} />
                                <Route path='/follows' element={ <Follows/>} />
                                <Route path='/myinfo' element={ <MyInfo />} />
                                <Route path='/posts' element={ <Posts />} />
                            </Routes>
                        </main>       
                </ProSidebarProvider>

    );
}
 
export default Profile;