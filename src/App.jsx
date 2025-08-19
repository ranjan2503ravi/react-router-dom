import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import { Outlet } from 'react-router-dom';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/> } />
      <Route path='about' element={<About/> } />
      <Route path='contact' element={<Contact/> } />
    </Route>
  )
)
const App = () => {
  return (
    <div>
      <RouterProvider router={router } />
    </div>
  )
}

export default App