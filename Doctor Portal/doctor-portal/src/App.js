import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/users">
            {/* <Users /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
