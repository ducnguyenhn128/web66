import React from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Homepage from "./homepage";
import Register from "./register/register";
import Profile from "./profile";
import Posts from "./profile/posts";
import Follows from "./profile/follows";
import Password from "./profile/password";
import Privacy from "./profile/privacy";
import Header from "./header";
import MyInfo from "./profile/myinfo";
import ViewPost from "./posts";
import LogIn from "./login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: '/register',
      element:  <Register/> 
    },
    {
      path: '/login',
      element:  <LogIn/> 
    },
    {
      path: 'profile',
      element: <Profile/> ,
      children: [
        {path: 'posts', element: <Posts/>},
        {path: 'follows', element: <Follows />},
        {path: 'passwords', element: <Password />},
        {path: 'privacy', element: <Privacy />},
        {path: 'myinfo', element: <MyInfo />}
      ]
    },
    {
      path: 'viewpost',
      element: <ViewPost />
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={ router } />
    </div>
  );
}

export default App