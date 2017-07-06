import React, { Component } from 'react';
import Marked from 'marked';
import renderHTML from 'react-render-html';
import './App.css';

const placeholder = 'Emphasis, aka italics, with *asterisks* or _underscores_.\nStrong emphasis, aka bold, with **asterisks** or __underscores__.\nCombined emphasis with **asterisks and _underscores_**.\nStrikethrough uses two tildes. ~~Scratch this.~~';

class App extends Component {
  constructor(prop){
    super(prop);

    this.state = {term:''};
  }
  render() {
    return (
      <div className="App">
      <div className="is-half">
        <textarea className="textarea" placeholder={placeholder} onChange={event => this.setState({term: event.target.value})} />
      </div>
      <div className="is-half">
      {renderHTML(Marked(this.state.term))}
      </div>
      </div>
    );
  }
}

export default App;
