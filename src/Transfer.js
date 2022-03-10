
import React, { Component } from "react";
import { withRouter } from "react-router";
import Logo from "./assets/img/logo.png"
class Transfer extends Component {
  render() {
    return (
      <div className="Transfer">
        <div className="login">
          <img src={Logo} />
        </div>
        <h2>HEHHEJEKKE</h2>
      </div>
    );
  }
}

export default withRouter(Transfer);
