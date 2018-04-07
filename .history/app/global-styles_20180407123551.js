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
    font-family: 'DINOT', sans-serif;
  }
  .table{
    position: relative;
    display: table;
    height:100vh;
    margin:auto;

  }
  .table-middle-row{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    height:100vh;
    background: url(${image});
    background-size: cover;
    background-position: center 0%;
    background-repeat: no-repeat;
    padding:0 20px;

  }
  .light{
    font-weight:100;
  }
  .normal{
    font-weight:400;
  }
  .medium{
    font-weight:600;
  }
  #app {
    background: url(${image});
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }

  @media(min-width: 768px){
    body{

      overflow:hidden;
    }
    #app{
      background: none;
      // width: 100%;
      margin:auto;
      background-size: cover;
      background-position: center 0%;
    }
  }

  .height{
    height: 100%;
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
  line-height:3rem;
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
#Main-Form .field{
  margin: 20px auto;
  border-top: 1px solid #a7a7a7;
  border-bottom: 1px solid #a7a7a7;
  .label{
    position: relative;
    display: inline;
    font-family: 'DINOT', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    opacity: 0.85;
    line-height: 3rem;
  }
  .main-input{
    position: relative;
    display: inline-block;
    width: 50%;
    padding: 1rem;
    background-color: transparent;
  }
}

#signup-form .field:nth-child(2){
  border-bottom: 1px solid #a7a7a7;
}
.ui.form .field{
  border-top: 1px solid #a7a7a7;
  margin-bottom: 0;
  .label{
    position: relative;
    display: inline-block !important;
    font-family: 'DINOT', sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
    opacity: 0.85;
    line-height: 3rem;
  }
  .main-input{
    position: relative;
    display: inline-block;
    width: 70%;
    float:right;
    padding: 1rem;
    float: right;
    border:none;
    background-color: transparent;
  }

  .main-input::placeholder {
    color:#9f9f9f;
  }
}

.ui.form select .select{
  color:#9f9f9f;

}
.ui.form select:focus{
  outline:none;
}
.ui.form select{
  width:60%;
  border:none;
  position: relative;
  display: inline-block;
  float:right;
  padding: 1rem;
  float: right;
  border:none;
  background-color: transparent;
}
.ui.form .field > label{
  display: inline-block;
  font-family: 'DINOT', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  opacity: 0.85;
  line-height: 3rem;
}
.ui.form input:not([type]):focus, .ui.form input[type="date"]:focus, .ui.form input[type="datetime-local"]:focus, .ui.form input[type="email"]:focus, .ui.form input[type="number"]:focus, .ui.form input[type="password"]:focus, .ui.form input[type="search"]:focus, .ui.form input[type="tel"]:focus, .ui.form input[type="time"]:focus, .ui.form input[type="text"]:focus, .ui.form input[type="file"]:focus, .ui.form input[type="url"]:focus{
  border-color: transparent;
  border-radius: 0;
  background:transparent;
}
.ui.form .field input:not([type]){
  border: 0;
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
.btn-custom:focus{
  outline:none;
}

.complete-page{

  .Heading{
    position: relative;
    font-family: 'DINOT', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    word-spacing: 0.1rem;
    color: #66a200;
    opacity: 0.85;
    margin-top: 0;
    margin-bottom: 0;
  }
  .main-text{
    font-family: 'DINOT', sans-serif;
    font-size: 1.3rem;
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
    letter-spacing: 0.6px;
    color: #fff;
    opacity: 0.85;
  }
}

.error{
  color:red;
  width:70%;
  float:right;
}

.warning, .register{
  width:70%;
  float:right;
  color:#9f9f9f;
}
.register{
  color:#9f9f9f;
  width:100%;
  text-align:center;
}
.ui.form input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
  background-color: transparent !important;
}

`;
