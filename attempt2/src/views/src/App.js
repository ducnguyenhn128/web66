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
import User from "./user/user";
import Logout from "./login/logout";

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
      element:  <LogIn/> ,
      exact: true // Add exact match to prevent redirect loop
    },
    {
      path: '/logout',
      element:  <Logout/>
    },
    {
      path: 'profile/*',   //login required
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
    },
    {
      path: 'user/:id/*',  //login required
      element: <User />
    }
  ]);

  return (
    <div className="App">
        <RouterProvider router={ router } />
    </div>
  );
}

export default App