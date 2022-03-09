
import React, { Component } from "react";
import { withRouter } from "react-router";
import Logo from "./assets/img/logo.png"
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="login">
          <img src={Logo} />
        </div>
        <h2>HEHHEJEKKE</h2>
      </div>
    );
  }
}

export default withRouter(Header);
