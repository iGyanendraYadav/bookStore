import React from 'react'
import "./App.css"
import Footer from './components/footer'
import Navbar from './components/navbar'
import Home from './components/home'
import Books from './components/books'
import Author from './components/author'
import Blog from './components/blog'
import Contact from './components/contact'
import Error from './components/error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogpost from './components/blogpost'

const App = () => {
  return (
    <>
   

      <Router> 
        <Navbar/>
      <Routes>
        <Route path='/' exact  element={<Home/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/author' element={<Author/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog/:blogpost' element={<Blogpost/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>


    
    </>
  )
}

export default App