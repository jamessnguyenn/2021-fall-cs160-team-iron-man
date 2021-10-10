import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landing/landing'
import JobSeekerCreateAccountPage from './components/jobSeekerSignup/JobSeekerSignup'
import SuccessPage from './components/Test/success'
import Navbar from './components/NavBar'
import JobSeekerLoginPage from './components/jobSeekerLogin/JobSeekerLogin'
import AboutPage from './components/About'
import ContactPage from './components/Contact'

function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/jobSeekerCreateAccount'>
          <JobSeekerCreateAccountPage/>
        </Route>
        <Route exact path='/jobSeekerLogin'>
          <JobSeekerLoginPage />
        </Route>
        <Route exact path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/contact'>
          <ContactPage />
        </Route>
        {/**TO BE DELETED FOR DEMONSTRATION PURPOSES**/}
        <Route exact path='/success'>
          <SuccessPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
