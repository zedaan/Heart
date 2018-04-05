import { injectGlobal } from 'styled-components';
import Dinot from './Font/DINOT.otf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
      font-family: DINOT;
      src: url(${Dinot}) format("opentype");
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'DINOT', Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'DINOT', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .btn-heart{
    color:white;
    width:100%;
    text-transform: uppercase;
    letter-spacing:0.7px;
    font-weight:700;
    border-radius: 30px;
    height:35px;

  }
  .bg-primary{
    background-color: #66a200;
  }
  .clr-primary{
    color: #66a200;
  }
`;
