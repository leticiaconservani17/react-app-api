import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

import './index.css'

import {purple, red} from '@material-ui/core/colors'

const theme = createTheme({
  palette:{
    primary: { 
      main: purple[500],
    },
    secondary: {
      main: red[500],
    }
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
)
