import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Dashboard from './components/dashboard';
import Theme from './utils/theme';


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
