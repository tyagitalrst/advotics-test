import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from './components/Dashboard';
import Theme from './utils/theme'
// import logo from './logo.svg';
// import './App.css';


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme} >
        <CssBaseline />
        <div>
          <Dashboard />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
