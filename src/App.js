import React from "react";
import "./styles.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Transfer from "./Transfer";
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
        {/* <Route path="/transfer">
          <Transfer />
        </Route> */}
        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
      </Switch>
      <div>
      </div>
    </Router>
  );
}
