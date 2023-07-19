import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    
    // Perform input validation
    if (!email || !password) {
      this.setState({ error: 'Please enter both email and password' });
      return;
    }
    
    // Reset the error state
    this.setState({ error: '' });

    // Perform login validation or authentication here

    // If the login is successful, call the onLogin function passed from App.js
    this.props.onLogin();
  };

  render() {
    const { email, password, error } = this.state;

    return (
      <div className="login-container">
        <h1>Login to Access Courses in E-Learning App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Email"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Password"
          />
          <br />
          <button type="submit">Submit</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    );
    
  }
}

export default Login;
