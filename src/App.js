// react libs and framework imports
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
}
  from 'react-router-dom'
// components imports
import Homepage from './pages/Home/Homepage'
import Catalog from './pages/Catalog/Catalog'
import Contact from './pages/Contact/Contact'
import Registeration from './pages/Reg/Registeration'
import PlansPage from './pages/Plans/PlansPage'
import Course from './pages/Course/Course'
import Classroom from './pages/Classroom/Classroom'
import Lesson from './pages/Lesson/Lesson'
import Blog from './pages/Blog/Blog'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// styles imports
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
            <Homepage />
            <Footer />
          </Route>
          <Route exact path="/plans">
            <PlansPage />
            <Footer />
          </Route>
          <Route exact path="/catalog">
            <Catalog />
            <Footer />
          </Route>
          <Route exact path="/contact-us">
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/registeration/sign-in">
            <Registeration />
          </Route>
          <Route exact path="/course">
            <Course />
            <Footer />
          </Route>
          <Route exact path="/classroom">
            <Classroom />
            <Footer />
          </Route>
          <Route exact path="/lesson">
            <Lesson />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
