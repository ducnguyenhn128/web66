import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import './styles.css'
import favicon from '../photo/linkedin_banner_image_1.png';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

// import { Icon } from '@mui/material';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const Header = () => {
  return (
    <div class='home-header'>
      <div class='d-flex justify-content-between bg-success p-2'>
          <div class='col-3 my-auto text-white'>
              {/* <img src={favicon} alt='logo' style={{width: '100px'}} /> */}
              Open Space
          </div>

          <div class='col-2 my-auto text-white'>
              <input placeholder='Search here'></input>
              
          </div>

          <div class='col-4 my-auto text-white'>
              <a href='/' class='me-4 text-white fs-3' ><MenuIcon /></a>
              <a href='/' class='me-4 text-white fs-3'><NotificationsIcon /></a>
              <a href='/' class='me-4 text-white fs-3'><MessageIcon /></a>
              <a href='/' class='me-4 text-white fs-3'><PersonIcon /></a>
          </div>
      </div>
      {/* <hr /> */}
    </div>
  );
}

export default Header;