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
const Profile = () => {
    return (
        // Test...
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
            <div style={{ height: "100%", width: "100%", marginLeft: '20%' }}>
                <main>
                    <Routes>
                        <Route path='/' element={ <ProfileStas />} /> 
                        <Route path='/passwords' element={ <Password />} />
                        <Route path='/privacy' element={ <Privacy />} />
                        <Route path='/follows' element={ <Privacy />} />
                        <Route path='/myinfo' element={ <MyInfo />} />
                        <Route path='/posts' element={ <Posts />} />
                    </Routes>
                </main>

            </div>
        </ProSidebarProvider>

        
    );
}
 
export default Profile;