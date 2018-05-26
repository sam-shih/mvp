import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Question from './components/Question.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

    this.yes = this.yes.bind(this);
    this.no = this.no.bind(this);
  }

  yes() {
    console.log('yes');
    $.post('/question')
    .done((res) => {
      console.log('got a response');
    })
    .fail((err) => {
      console.log('no dice');
    })
  }

  no () {
    console.log('no');

  }

  render () {
    return (
      <div>
      <h4>Workout Share</h4>
        <div>
          <Question onYes={this.yes} onNo={this.no}/>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));

  // componentDidMount () {
  //   $.get('/index', () => {})
  //   // handle the login: check if user is in db
  //   // if user is not in db,
  //   //   create mongoose doc instance for user
  //   //   (unique based on email?)
  //   //   send to '/question' page
  //   // else send to '/question' page.
  // }


// import Login from './components/Login.jsx';
    // this.signUp = this.signUp.bind(this);
    // this.login = this.login.bind(this);
    //     // <div>
        //   <Login onSignUp={this.signUp.bind(this)} onLogin={this.login.bind(this)}/>
        // </div>
  // signUp (userName) {
  //   $.ajax({

  //   })
  // }

  // login (userName) {

  // }