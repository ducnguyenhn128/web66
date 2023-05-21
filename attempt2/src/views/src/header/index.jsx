import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import './styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import favicon from '../photo/logoheader1.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/api/logout', null, {
        withCredentials: true,
      });
  
      // Clear the token from client-side storage
      localStorage.removeItem('token');
  
      // Redirect to the login page or perform other actions
      // window.location.href = '/login';
      navigate('/login')
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div class='home-header p-0'>
      <div class='d-flex justify-content-between bg-success'>
          <div class='col-2 my-auto text-white'>
              <a href='/'>
                <img src={favicon} alt='logo' style={{height: '60px'}}/>

              </a>
              {/* Open Space */}
          </div>

          <div class='col-2 my-auto text-white'>
              <input 
                placeholder='Search ...'
                className='header-search-input'
              />
          </div>

          <div class='my-auto text-white flex-grow-1 text-end'>
              <a href='/' class='me-4 text-white fs-3' ><MenuIcon /></a>
              <a href='/' class='me-4 text-white fs-3'><NotificationsIcon /></a>
              <a href='/' class='me-4 text-white fs-3'><MessageIcon /></a>
              <a href='/profile' class='me-4 text-white fs-3'><PersonIcon /></a>
              <a href='/' class='me-4 text-white fs-3' onClick={handleLogout}><LogoutIcon /></a>
          </div>
      </div>
    </div>
  );
}

export default Header;