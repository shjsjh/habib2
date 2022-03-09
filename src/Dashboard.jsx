import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./Dashboard.css";
import Logo from "./assets/img/logoo.PNG"
import Master from "./Master";
import Pos from "./Pos";
import IndexDashboard from "./IndexDashboard";
import NotFound from "./404";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div className="dasshboard">
        <div className="dashboard_header">
            <img src={Logo} alt="logo" />
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
        </div>
          <div className="main-account-balance">
            
          </div>
          <div className="account-activity">
            <button>Activity</button>
          </div>
          <div className="transaction">
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">MOB2/UTO/To Ivica Tasńer</span>
                <span>-€75,000.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>06/9/2021</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">Pending: 45574 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com
                CA</span>
                <span>-€350.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>14/6/2019</span>
                <div>
                  <span>Pending</span>
                  <span>€1,500.00</span>
                </div>
                
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">31244 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-€230.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>13/5/2019</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">37574 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-€750.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>6/5/2018</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">40074 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-€2,010.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>14/4/2018</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">35074 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-€1,350.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>21/3/2018</span>
              </div>
            </div>
          </div>
          <div className="account-footer">
          <div>
              <span
                ><svg
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                  ></path></svg></span>
                  <span>Home</span>
            </div>
          <div>
              <span
                ><svg
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                  ></path></svg></span>
                  <span>Account</span>
            </div>
          <div>
              <span
                ><svg
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"
                  ></path></svg></span>
                  <span>Bills</span>
            </div>
          <div>
              <span
                ><svg
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                  ></path></svg></span>
                  <span>Transfer</span>
            </div>
          <div>
              <span
                ><svg
                  enable-background="new 0 0 24 24"
                  height="18px"
                  viewBox="0 0 24 24"
                  width="18px"
                  fill="#000000"
                >
                  <g>
                    <path d="M0,0h24v24H0V0z" fill="none"></path>
                    <path
                      d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"
                    ></path>
                  </g></svg></span>
                  <span>Option</span>
            </div>
          </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
