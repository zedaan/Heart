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
    margin:auto ;
    min-width:100%;
   

  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'DINOT', sans-serif;
    font-size: 36pt;
    font-weight:400;
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
  }
  #app{
    width:100%;
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


.height{
    height: 100%;
}
  p,
  label, input, span, button {
    font-family: 'DINOT', sans-serif;
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

  .float-top{
    position:absolute !important;
    padding-top: 2rem;
    top:0;
    left:50%;;
    margin-left:-150px !important;
  }

// Typography Goes here
.Main-Heading{
  position: relative;
  font-family: 'DINOT', sans-serif;
  font-weight: 400;
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
  // margin-top: 2.7rem;
  position:absolute;
  bottom:3rem;
  left:0;
  right:0;
}
// Form Style Goes here
#Main-Form .field{
  position:relative;
  margin: 20px auto;
  border-top: 1px solid rgb(216,216,216);
  border-bottom: 1px solid rgb(216,216,216);
  text-align:left;
  padding-left:20px;
  .label{
    position: relative;
    display: inline;
    font-family: 'DINOT', sans-serif;
    font-size: 17pt;
    font-weight: 400;
    color: #000;
    opacity: 0.85;
    line-height: 3rem;
  }
  .main-input{
    position: relative;
    display: inline-block;
    width: 70%;
    padding: 1rem;
    padding-left:0;
    background-color: transparent;
  }
}

#signup-form .field:nth-child(2){
  border-bottom: 1px solid rgb(216,216,216);
}
.ui.form .field{
  font-family: 'DINOT';
  position:relative;
  border-top: 1px solid rgb(216,216,216);
  margin-bottom: 0;
  text-align:left;
  padding-left:20px;
  height:44pt;
  .label{
    position: relative;
    display: inline-block !important;
    font-family: 'DINOT', sans-serif;
    font-size: 17pt;
    font-weight: 400;
    color: #000;
    opacity: 0.85;
    line-height: 17pt;
  }
  .main-input{
    position: relative;
    display: inline-block;
    width: 70%;
    float:right;
    padding: 17pt;
    float: right;
    border:none;
    padding-left:0;
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
  font-family: 'DINOT';
  width:60%;
  border:none;
  position: relative;
  display: inline-block;
  float:right;
  padding: 1rem;
  padding-left:0;
  float: right;
  border:none;
  background-color: transparent;
}
.ui.form .field > label{
  display: inline-block;
  font-family: 'DINOT', sans-serif;
  font-size: 17pt;
  font-weight: 600;
  color: #000;
  opacity: 0.85;
  line-height: 17pt;
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
  height:44pt;

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
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-top: 10px;
  padding-left: 15px;
  color:red;
  width:70%;
  text-align:left;
}

.warning, .register{
  width:70%;
  float:right;
  color:#9f9f9f;
  text-align:left;
  padding-left:15px;
}
.register{
  color:#9f9f9f;
  width:100%;
  text-align:center;
}
.ui.form input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
  background-color: transparent !important;
}


@media(min-width: 768px){
  body{
    
    overflow:hidden;
  }

  .table{
     min-width:50%;
  }
  .table-middle-row{
    padding:0 20px;
    
  }
  .btn-custom{
    width:50%;
  }
  #signup-form .btn-custom, #Main-Form .btn-custom{
    width:100%;
  }
  #info-form{
    text-align: left;
    .field{
      padding-left:20px;
    }
    select{
      width:70%;
    }
    .btn-custom{
      width:100%;
    }
  }
}

`;
