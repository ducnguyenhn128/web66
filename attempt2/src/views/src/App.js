import React, { useState, useEffect } from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Homepage from "./homepage";
import Register from "./register/register";
import SignIn from "./signin";
import Profile from "./profile";
import Posts from "./profile/posts";
import Follows from "./profile/follows";
import Password from "./profile/password";
import Privacy from "./profile/privacy";
import Header from "./header";
import MyInfo from "./profile/myinfo";
import ViewPost from "./posts";

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
      path: '/signin',
      element:  <SignIn/> 
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
  // const router1 = createBrowserRouter(createRoutesFromElements(
  //   <Route>
  //         <Route path='/' element={ <Homepage/> } /> 
  //         <Route path='/register' element={ <Register/> } />
  //         <Route path='/signin' element={ <SignIn/> } />
  //         <Route path='/profile' element={ <Profile/> }/> 
  //             <Route path='posts' element={ <Posts/> } />
  //             <Route path='follows' element={ <Follows/> } />
  //             <Route path='password' element={ <Password/> } />
  //             <Route path='/profile/privacy' element={ <Privacy/> } />
  //             <Route path='/profile/myinfo' element = { <MyInfo />} />
  //         <Route path='/viewpost' element = { <ViewPost /> } />
  //   </Route>
  // ));
  return (
    <div className="App">
        <RouterProvider router={ router } />
    </div>
  );
}

export default App