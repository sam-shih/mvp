import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: ''
    }
  }

  onChange (e) {
    this.setState({
      person: e.target.value
    });
  }

  signUp () {
    this.props.onSignUp(this.state.person);
  }

  login () {
    this.props.onLogin(this.state.person);
  }

  render () {
    return (
      <div>
        <input value={this.state.person} onChange={this.onChange} />
      </div>
      <div>
        <button onClick={this.signUp}>Sign Up</button>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default Login;