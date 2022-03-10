import React, { Component } from "react";
import { Redirect, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import Modal from '@bdenzer/react-modal';
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
      islogout: false,
      shouldShowModal: false
    };
    this.closeModal = this.closeModal.bind(this);
      this.openModal = this.openModal.bind(this);
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  closeModal() {
    this.setState({ shouldShowModal: false });
  }

  openModal() {
    this.setState({ shouldShowModal: true });
  }
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div className="dasshboard">
        <div className="main-account-balance">
          <div className="dashboard_header">
              {/* <img src={Logo} alt="logo" /> */}
              <div className="account-img">

              </div>
            <button className="logout_btn" onClick={this.signOut} href="#">
              <i class="fa fa-sign-out" aria-hidden="true"></i>
            </button>
          </div>
          <div className="account-details">
            <div className="account-name-img">
              <div className="account-name">
                Hi, Lauren Milligan
              </div>
            </div>
            <div className="dddd">
                <span>Account</span>
            </div>
            <div className="account-balance">
              <span>Checkings</span>
              <div className="account-balance-availability">
              <span>$874,000</span>
              <p>Available</p>
              </div>
              
            </div>
            <div className="account-balance">
              <span>Savings</span>
              <div className="account-balance-availability">
              <span>$237,900</span>
              <p>Available</p>
              </div>
            </div>
          </div>
          </div>
          <div className="account_main">
            <div className="account-activity">
            <p>Transactions</p>
          </div>
          <div className="transaction">
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">MOB2/UTO/To Ivica Tasńer</span>
                <span>-$75,000.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>06/9/2011</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">Pending: 45574 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com
                CA</span>
                <span>-$350.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>14/6/2011</span>
                <div>
                  <span>Pending</span>
                  <span>$1,500.00</span>
                </div>
                
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">31244 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-$230.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>13/5/2011</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">37574 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-$750.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>6/5/2011</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">40074 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-$2,010.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>14/4/2011</span>
              </div>
            </div>
            <div className="transaction_box">
              <div className="transaction_box-top">
                <span className="_desc">35074 PREAUTH 008829 CASH APP*BILL LONG*AD gosq.com CA</span>
                <span>-$1,350.00</span>
              </div>
              <div className="transaction_box-bottom">
                <span>21/3/2011</span>
              </div>
            </div>
          </div>
          </div>
          
          
          <div className="account-footer">
          <div>
              <span
                ><i class="fa fa-user" aria-hidden="true"></i></span>
                  <span>Account</span>
            </div>
            <div onClick={this.openModal}>
              <span
                ><i class="fa fa-exchange" aria-hidden="true"></i></span>
                  <span>Transfer</span>
            </div>
            
          <div>
              <span
                ><i class="fa-solid fa-angles-down"></i></span>
                  <span>Deposit</span>
            </div>
          <div>
              <span
                ><i class="fa fa-money" aria-hidden="true"></i></span>
                  <span>Pay</span>
            </div>
          </div>
          <Modal
            closeModal={this.closeModal}
            shouldShowModal={this.state.shouldShowModal}
            title="Transfer Fund"
          >
            <form className="modal_form">
            <div>
            <label>Receipt Account</label>
              <input type="text" />
            </div>
            <div>
            <label>Amount ($)</label>
              <input type="text" />
            </div>
            <div>
              <button>Transfer</button>
            </div>
              
            </form>
          </Modal>
      </div>
    );
  }
}

export default withRouter(Dashboard);
