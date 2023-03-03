import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-glass: #0000006f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
  }
`

export const cssSnipets = {
  flexColumn:
    ' display: flex; justify-content: center; flex-direction: column;',
  flexRow: ' display: flex; justify-content: center; align-items: center;',
}

export default GlobalStyle
