import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landing/Landing'
import JobSeekerCreateAccountPage from './components/jobSeekerSignup/JobSeekerSignup'
import JobSeekerLoginPage from './components/jobSeekerLogin/JobSeekerLogin'
import AboutPage from './components/about/About'
import ContactPage from './components/contact/Contact'
import JobSeekerDashboardPage from './components/jobSeekerDashboard/JobSeekerDashboard'
import RecruiterSignUpPage from './components/recruiterSignUp/RecruiterSignUp'
import RecruiterLoginPage from './components/recruiterLogin/RecruiterLogin'
import RecruiterDashboardPage from './components/recruiterDashboard/RecruiterDashboard'
import RecruiterAddJob from './components/recruiterAddJob/RecruiterAddJob'
import RecruiterUnderConstruction from './components/recruiterUnderConstruction/recruiterUnderConstruction'
import JobSeekerUnderConstruction from './components/jobseekerUnderConstruction/jobseekerUnderConstruction'
import NotFound from './components/notFound/notFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/jobSeeker/signup">
          <JobSeekerCreateAccountPage />
        </Route>
        <Route exact path="/jobSeeker/login">
          <JobSeekerLoginPage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/jobSeeker/dashboard">
          <JobSeekerDashboardPage />
        </Route>
        <Route exact path="/jobseeker/editProfile">
          <JobSeekerUnderConstruction/>
        </Route>
        <Route exact path="/jobSeeker/applied">
          <JobSeekerUnderConstruction/>
        </Route>
        <Route exact path="/recruiter/signup">
          <RecruiterSignUpPage />
        </Route>
        <Route exact path="/recruiter/login">
          <RecruiterLoginPage />
        </Route>
        <Route exact path="/recruiter/dashboard">
          <RecruiterDashboardPage />
        </Route>
        <Route exact path='/recruiter/addjob'>
          <RecruiterAddJob />
        </Route>
        <Route exact path='/recruiter/editProfile'>
          <RecruiterUnderConstruction/>
        </Route>
        <NotFound/>
      </Switch>
    </Router>
  );
}

export default App;
