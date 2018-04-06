import { injectGlobal } from 'styled-components';
import image from 'images/bg1.jpg'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    background: url(${image});
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
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
    font-weight:400;
    border-radius: 30px;
    height:35px;

  }
  .bg-primary{
    background-color: #66a200;
  }
  .clr-primary{
    color: #66a200;
  }

  // Gloabal Claasses
  .logo{
  position: relative;
  padding-top: 1rem;
}

// Typography Goes here
  .Main-Heading{
    position: relative;
    margin-top: 5rem;
    margin-bottom: 1.5rem;
    font-size: 3rem;
    font-weight: 300;
  }
  .main-text{
    font-size: 16px;
  }
  .sub-text{
    font-size: 20px;
    margin-top: 3rem;
  }

  // Form Style Goes here
  .field{
    margin: 20px auto;
    border-top: 1px solid green;
    border-bottom: 1px solid green;
    .label{
      position: relative;
      font-size: 15px;
      display: inline-block;
    }
    .main-input{
      position: relative;
      display: inline-block;
      width: 50%;
      padding: 1rem;
    }
  }

  .btn-custom{
    position: relative;
    margin: 20px auto;
  }
`;
