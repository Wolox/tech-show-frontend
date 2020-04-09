import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { login } from '../../services/AuthService';

import styles from './styles.module.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
    emailError: false,
    passwordError: false
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value, emailError: !event.target.value.length });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
      passwordError: !event.target.value.length || event.target.value.length < 6
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const response = await login({ email, password });
    localStorage.setItem('token', response.data.token);
  };

  render() {
    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={this.handleEmailChange} />
        {this.state.emailError && <span className={styles.errorLabel}>El campo de email es inválido</span>}
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={this.handlePasswordChange} />
        {this.state.passwordError && (
          <span className={styles.errorLabel}>El campo de password es inválido</span>
        )}
        {/* <button type="submit" disabled={this.state.passwordError || this.state.emailError}>
          Submit
        </button> */}
        <Link to="/books">Ir a books</Link>
      </form>
    );
  }
}

export default Login;
