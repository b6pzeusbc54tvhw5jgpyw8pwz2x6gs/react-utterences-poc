import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import ReactUtterences from './ReactUtterences';

const typeList = [{
  attrName: 'issue-term',
  attrValue: 'pagename',
  summary: 'Issue title contains page pathname',
}, {
  attrName: 'issue-term',
  attrValue: 'url',
  summary: 'Issue title contains page URL',
}, {
  attrName: 'issue-term',
  attrValue: 'title',
  summary: 'Issue title contains page title',
}, {
  attrName: 'issue-term',
  attrValue: 'og:title',
  summary: 'Issue title contains page og:title',
}, {
  attrName: 'issue-number',
  attrValue: -1,
  summary: 'Specific issue number',
}, {
  attrName: 'issue-term',
  attrValue: '',
  summary: 'Issue title contains specific term',
}]

const root = {
  display: 'flex'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSelect = (e) => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  }

  render() {
    const info = typeList[5]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={root}>
          <Paper>
            <MenuList>
            <MenuItem onClick={() => this.handleSelect(0)}>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Paper>
        </div>
        <ReactUtterences
          repo={'b6pzeusbc54tvhw5jgpyw8pwz2x6gs/aluc-io-comment'}
          attrName={info.attrName}
          attrValue={'ee'}
        />
      </div>
    );
  }
}

export default App;
