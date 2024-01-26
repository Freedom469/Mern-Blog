
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home'
import About from './pages/about'
import Dashboard from './pages/dashboard'
import Projects from './pages/projects'
import SignUp from './pages/signup'
import SignIn from './pages/singnin'
import Header from './components/header'
import { Button } from 'flowbite-react';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={< Dashboard/>}/>
        <Route path="/projects" element={< Projects/>}/>
        <Route path="/signup" element={< SignUp/>}/>
        <Route path="/signin" element={< SignIn/>}/>
      </Routes>
    </BrowserRouter>
  )
}

