import React, { Component } from "react";
import "./Login.css";
import { Redirect } from "react-router-dom";
import Logo from "./assets/img/logoo.PNG"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false,
      loginParams: {
        user_id: "",
        user_password: ""
      }
    };
  }
  handleFormChange = event => {
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  };

  login = event => {
    let user_id = this.state.loginParams.user_id;
    let user_password = this.state.loginParams.user_password;
    if (user_id === "NikkiLF1988" && user_password === "motherlovesme00") {
      localStorage.setItem("token", "T");
      this.setState({
        islogged: true
      });
    }
    event.preventDefault();
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
        <div className="login-page">
            <div className="container">
        <div className="header">
            <img src={Logo} alt="logo" />
        </div>
        <div class="login-content">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<div class="login-brand">
					<a href="#"><span class=" fa fa-lock logo"></span> Internet Banking | </a>
				</div>
				<div class="login-desc">
					Login securely into your account, for more assistance if needed Email: info@habibtrustreserves.com for Help.
				</div>
				<form onSubmit={this.login}>
					<div class="form-group">
						<label class="control-label" style={{color: "white"}}>Account Number</label>
						<input type="text" name="user_id"
                    onChange={this.handleFormChange} class="form-control" placeholder="Enter Your Account Number" autofocus="" />
						<input type="hidden" name="code" value="" class="form-control" />
					</div>
					<div class="form-group">
						<label class="control-label" style={{color: "white"}}>Password</label>
						<input type="password" name="user_password"
                    onChange={this.handleFormChange} class="form-control" placeholder="Enter Password" />
					</div>

					<input type="submit" className="btn btn-inverse" value="Sign In" />
										
				</form>
				
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
				<footer class="" style={{color: "white"}}>
		© 2021 Habib Trust Reserve Inc. All Rights Reserved.
			
		</footer>
			</div>
        
      </div>
        </div>
      
    );
  }
}
export default Login;