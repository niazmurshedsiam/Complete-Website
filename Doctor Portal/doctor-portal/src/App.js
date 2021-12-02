import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import AllPatients from "./components/AllPatients/AllPatients/AllPatients";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Switch>
            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>
            <Route path="/dashboard/appointment">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/dashboard/allPatients">
            <AllPatients></AllPatients>
          </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
