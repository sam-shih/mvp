import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: ''
    }
    this.onChange =  this.onChange.bind(this);
  }

  onChange (e) {
    console.log(e.target.value);
    this.setState({
      person: e.target.value
    });
  }

  signUp (e) {
    e.preventDefault();
    this.props.onSignUp(this.state.person);
  }

  login (e) {
    e.preventDefault();
    this.props.onLogin(this.state.person);
  }

  render () {
    return (
      <div>
        <div>
          <input value={this.state.person} onChange={this.onChange} />
        </div>
        <div>
          <button onClick={this.signUp}>Sign Up</button>
          <button onClick={this.login}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login;