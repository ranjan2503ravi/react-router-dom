import React from 'react'
import Layout from './Layout'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Contact from './Component/Contact/Contact'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Params from './Params/Params';
import Course from './Component/About/Course/Course';
import Mocetest from './Component/About/Mocetest/Mocetest';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/> } />
      <Route path='about' element={<About />}>
        <Route path='course' element={<Course/> } />
        <Route path='mocetest' element={<Mocetest/> } />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='/user/:id' element={<Params/>} />
      
    </Route>
  )
)
const App = () => {
  return (
    <div>
      <RouterProvider router={ router} />
    </div>
  )
}

export default App