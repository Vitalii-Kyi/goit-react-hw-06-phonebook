import { styled, createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  cursor: pointer;
}

`;

export const Box = styled.div`
  margin: 24px auto;
  padding: 36px;
  width: 480px;
  height: fit-content;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  background-color: #f8f8f8;
  text-align: center;

  h1,
  h2 {
    max-width: max-content;
    padding-left: 8px;
    padding-right: 8px;
    margin: auto;
    margin-bottom: 24px;
  }

  b {
    color: #000000;
    font-size: 15px;
  }
`;
