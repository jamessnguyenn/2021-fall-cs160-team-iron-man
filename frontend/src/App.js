import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landing/landing'
import JobSeekerCreateAccountPage from './components/jobSeekerSignup/JobSeekerSignup'
import SuccessPage from './components/Test/success'
import Navbar from './components/NavBar'
import JobSeekerLoginPage from './components/jobSeekerLogin/JobSeekerLogin'

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
        {/**TO BE DELETED FOR DEMONSTRATION PURPOSES**/}
        <Route exact path='/success'>
          <SuccessPage/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
