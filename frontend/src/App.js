
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from "./components/landing/landing"
import JobSeekerCreateAccountPage from "./components/jobSeekerSignup/jobSeekerSignup"

function App() {
  return (
    <Router>
        <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Router exact path="/jobSeekerCreateAccount">
          <JobSeekerCreateAccountPage/>
        </Router>
        </Switch>
    </Router>
  );
}

export default App;
