import React from "react";
import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
      </Switch>
      <div>
        <center>
          GET CODE AND TUTORIAL AT :
          <br />
          <strong>
            <a href="https://seegatesite.com/implement-login-page-and-protected-route-reactjs">
              https://seegatesite.com/implement-login-page-and-protected-route-reactjs
            </a>
          </strong>
        </center>
      </div>
    </Router>
  );
}
