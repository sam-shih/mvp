import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Question from './components/Question.jsx';
import Login from '.components/Login.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  // componentDidMount () {
  //   $.get('/index', () => {})
  //   // handle the login: check if user is in db
  //   // if user is not in db,
  //   //   create mongoose doc instance for user
  //   //   (unique based on email?)
  //   //   send to '/question' page
  //   // else send to '/question' page.
  // }

  yes() {
    console.log('yes');
    // set state to the yes page...log update (increment) the db?
    $.post('/question', {data: "hello"})
     .done((res) => {
      console.log('ok');
     })
     .fail((err) => {
      console.log('crap');
     })
  }

  no () {
    console.log('no');
    // set state to the no page...

  }

  signUp () {

  }

  login () {

  }

  render () {
    return (
      <div>
      <h4>Workout Share</h4>
        <div>
          <Login onSignUp={this.signUp.bind(this)} onLogin={this.login.bind(this)}/>
        </div>
        <div>
          <Question onYes={this.yes.bind(this)} onNo={this.no.bind(this)}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));