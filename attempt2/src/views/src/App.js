import React, { useState, useEffect } from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Routes } from 'react-router-dom';
import Homepage from "./homepage";
import Register from "./register/register";
import SignIn from "./signin";
import Profile from "./profile";
import Posts from "./profile/posts";

function App() {
  
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path='/' element={ <Homepage/> } />
        <Route path='/register' element={ <Register/> } />
        <Route path='/signin' element={ <SignIn/> } />
        <Route path='/profile' element={ <Profile/> } />
        <Route path='/posts' element={ <Posts/> } />
    </Route>
  ));
  return (
    <div className="App">
        <RouterProvider router={ router } />
    </div>
  );
}

export default App