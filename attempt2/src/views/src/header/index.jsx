import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import './styles.css'
import favicon from '../photo/linkedin_banner_image_1.png'
const Header = () => {
  return (
    <div class='home-header'>
      <div class='mt-2 d-flex justify-content-between'>
          <div class='col-3'>
              {/* <h4>Social Media App</h4> */}
              <img src={favicon} alt='logo' style={{width: '100px'}} />
          </div>

          <div class='col-2'>
            Search
          </div>

          <div class='col-4'>
              <a>
                <div>
                  ICON
                </div>
              </a>

              <Button class='ms-2'>Home </Button>
              <Button class='ms-2'>Notification </Button>
              <Button class='ms-2'>Message </Button>
              <Button class='ms-2'>Me </Button>
          </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;