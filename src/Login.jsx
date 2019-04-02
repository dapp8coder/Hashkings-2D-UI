import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import {  withRouter } from 'react-router-dom'
import Cookie from "js-cookie";
// import { useState } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    Cookie.set("username", this.state.username)
    // this.props.history.push('/profile-page')
    if(window && !window.steem_keychain) {
    alert('You must install Steem Keychain to play')
}

  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bssize="large">
            <FormLabel>username</FormLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Steem Keychain Login
          </Button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);