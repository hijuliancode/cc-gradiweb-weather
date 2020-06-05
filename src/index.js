import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import * as serviceWorker from './serviceWorker'

// Styles
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize as Normalize } from "styled-normalize"
import * as Theme from "./config/theme/"

export const GlobalStyle = createGlobalStyle`
  ${Normalize}
  /* Global Styles */
  * { box-sizing: border-box; }
  html, body, #root { height: 100vh; }
  body {
    background-color: ${props => props.theme.lightColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle/>
    <Root />
  </ThemeProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
