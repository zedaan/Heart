import { injectGlobal } from 'styled-components';
import image from 'images/bg1.jpg'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'DINOT';
    font-style: light;
    font-weight: 100;
    src:
      local('DINOT-light'),
      url(./Fonts/DINOT-Light.otf) format('otf');
  }
  @font-face {
    font-family: 'DINOT';
    font-style: normal;
    font-weight: 400;
    src:
      local('DINOT'),
      url(./Fonts/DINOT.otf) format('otf');
  }
  @font-face {
    font-family: 'DINOT';
    font-style: medium;
    font-weight: 600;
    src:
      local('DINOT-Medium'),
      url(./Fonts/DINOT-Medium.otf) format('otf');
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'DINOT', sans-serif;
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
    font-family: 'DINOT', sans-serif;
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
  font-family: 'DINOT', sans-serif;
  font-weight: 100;
  font-size: 2.6rem;
  word-spacing: 0.1rem;
  letter-spacing: 0.1rem;
  color: #000;
  opacity: 0.85;
  margin-top: 5rem;
  margin-bottom: 1.5rem;

}
.main-text{
  font-family: 'DINOT', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  opacity: 0.85;
}
.sub-text{
  font-family: 'DINOT', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: #000;
  opacity: 0.85;
  margin-top: 2.7rem;
}
// Form Style Goes here
.ui.form .field{
  margin: 20px auto;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  .label{
    position: relative;
    display: inline-block;
    font-family: 'DINOT', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    opacity: 0.85;
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
  font-family: 'DINOT', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  word-spacing: 0.1rem;
  color: #fff;
  opacity: 0.85;
  margin: 20px auto;

}
  .complete-page{
    .Mockup{
      padding-top: 3rem;
    }
    .Heading{
      position: relative;
      font-family: 'DINOT', sans-serif;
      font-weight: 800;
      font-size: 3rem;
      word-spacing: 0.1rem;
      color: #66a200;
      opacity: 0.85;
      margin-top: 0;
    }
    .main-text{
      font-family: 'DINOT', sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      color: #000;
      opacity: 0.85;
    }
    .btn-custom{
      position: relative;
      font-family: 'DINOT', sans-serif;
      font-size: 1rem;
      font-weight: 600;
      word-spacing: 0;
      letter-spacing: 0;
      color: #fff;
      opacity: 0.85;
    }
  }
  .primaryHeading{
    font-weight: 600;
  }
`;
