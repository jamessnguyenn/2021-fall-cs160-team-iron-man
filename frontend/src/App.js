import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './components/landing/landing'
import JobSeekerCreateAccountPage from './components/jobSeekerSignup/JobSeekerSignup'
import SuccessPage from './components/Test/success'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/jobSeekerCreateAccount'>
          <JobSeekerCreateAccountPage/>
        </Route>
        <Route exact path='/jobSeekerCreateAccount'>
          <JobSeekerCreateAccountPage/>
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
