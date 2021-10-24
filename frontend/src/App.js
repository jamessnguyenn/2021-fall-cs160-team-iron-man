import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landing/landing'
import JobSeekerCreateAccountPage from './components/jobSeekerSignup/JobSeekerSignup'
import JobSeekerLoginPage from './components/jobSeekerLogin/JobSeekerLogin'
import AboutPage from './components/about/About'
import ContactPage from './components/contact/Contact'
import JobSeekerHomePage from './components/jobSeekerHome/jobSeekerHome'
import RecruiterLoginPage from './components/recruiterLogin/RecruiterLogin'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/jobSeeker/createAccount'>
          <JobSeekerCreateAccountPage/>
        </Route>
        <Route exact path='/jobSeeker/login'>
          <JobSeekerLoginPage />
        </Route>
        <Route exact path='/about'>
          <AboutPage />
        </Route>
        <Route exact path='/contact'>
          <ContactPage />
        </Route>
        <Route exact path='/jobSeeker/home'>
          <JobSeekerHomePage />
        </Route>
        <Route exact path='/recruiter/login'>
          <RecruiterLoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
