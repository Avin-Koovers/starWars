import React from 'react';
import ReactDom from 'react-dom';
import App from  './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

ReactDom.render(<MuiThemeProvider theme={theme}>
                    <App/>
                </MuiThemeProvider>, document.getElementById('app'));