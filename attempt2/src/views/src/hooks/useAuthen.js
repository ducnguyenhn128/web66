import { useState, useEffect } from 'react';
import axios from 'axios';

const useAuthentication = () => {
    useEffect(() => {
        checkLoggedIn();
      }, []);

    const [loggedIn, setLoggedIn] = useState(false);


    const checkLoggedIn = async () => {
    try {
        const response = await axios.get('/api/check-login');

        if (response.status === 200) {
        setLoggedIn(true);
        }
    } catch (error) {
        setLoggedIn(false);
    }
    };

    const login = async (username, password) => {
        try {
          const response = await axios.post('/api/login', { username, password });
    
          if (response.status === 200) {
            setLoggedIn(true);
            localStorage.setItem('jwtToken', response.data.token);
          }
        } catch (error) {
          // Handle login error
        }
      };

      const logout = () => {
        localStorage.removeItem('jwtToken');
        setLoggedIn(false);
      };
    
      return {
        loggedIn,
        login,
        logout
      };
}

export default useAuthentication;
