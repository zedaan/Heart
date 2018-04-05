import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  @font-face {
      font-family: DINOT;
      src: url("./Font/Dinot.otf") format("opentype");
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
