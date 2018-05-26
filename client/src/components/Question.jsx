import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.yes = this.yes.bind(this);
    this.no = this.no.bind(this);
  }

  yes () {
    this.props.onYes();
  }

  no () {
    this.props.onNo();
  }

  render () {
    return (
      <div>
        <h4>Have you done your exercise today yet?</h4>
        <button onClick={this.yes}> Yes </button>
        <button onClick={this.no}> No </button>
      </div>
    )
  }
}

export default Question;