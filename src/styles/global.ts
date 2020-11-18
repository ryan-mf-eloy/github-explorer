import { createGlobalStyle } from 'styled-components';
import githubBg from '../assets/github-bg.svg';
import themes from './themes';

export default createGlobalStyle<{theme: typeof themes}>`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    background: ${({theme}) => theme.backgroundColor} url(${githubBg}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px 'Roboto', 'Ubuntu', 'sans-serif';
  }

  button{
    cursor: pointer;
  }

  #root{
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 20px;
  }
`;