import { injectGlobal } from 'styled-components';
import image from 'images/bg1.jpg'

/* eslint no-unused-expressions: 0 */
injectGlobal`

@font-face {
  font-family: "San Francisco Display Ultralight";
  font-style: normal;
  font-weight: 400;
  src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.eot?#iefix) format("embedded-opentype"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff2) format("woff2"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff) format("woff"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.ttf) format("truetype"), url("fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.svg#San Francisco Display Ultralight") format("svg")
}

@font-face {
  font-family: "San Francisco Display Thin";
  font-style: normal;
  font-weight: 400;
  src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.eot?#iefix) format("embedded-opentype"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff2) format("woff2"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.woff) format("woff"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.ttf) format("truetype"), url("fonts/sanfrancisco/sanfranciscodisplay-thin-webfont.svg#San Francisco Display Thin") format("svg")
}

@font-face {
  font-family: "San Francisco Display Medium";
  font-style: normal;
  font-weight: 400;
  src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.eot?#iefix) format("embedded-opentype"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff2) format("woff2"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.woff) format("woff"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.ttf) format("truetype"), url("fonts/sanfrancisco/sanfranciscodisplay-medium-webfont.svg#San Francisco Display Medium") format("svg")
}

@font-face {
  font-family: "San Francisco Display Semibold";
  font-style: normal;
  font-weight: 400;
  src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.eot?#iefix) format("embedded-opentype"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff2) format("woff2"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.woff) format("woff"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.ttf) format("truetype"), url("fonts/sanfrancisco/sanfranciscodisplay-semibold-webfont.svg#San Francisco Display Semibold") format("svg")
}

@font-face {
  font-family: "San Francisco Display Bold";
  font-style: normal;
  font-weight: 400;
  src: url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.eot?#iefix) format("embedded-opentype"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff2) format("woff2"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff) format("woff"), url(https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.ttf) format("truetype"), url("fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.svg#San Francisco Display Bold") format("svg")
}
  
 
  html,
  body {
    height: 100%;
    width: 100%;
    overflow:hidden;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto', sans-serif;
    font-weight:400;
    
  }
  h2{
    font-size:22pt;
    font-family: 'Roboto', sans-serif;
    font-weight:500;
  }
  p,label, input, span, select {
    font-family: "San Francisco Display Thin";
    font-weight:bold;
  }

  .table{
    position: relative;
    display: table;
    height:100vh;
    margin:auto ;
    min-width:100%;
   

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



.height{
    height: 100%;
}

.btn-heart{
  font-family: "San Francisco Display Semibold";
  color:white;
  width:100%;
  text-transform: uppercase;
  letter-spacing:0.7px;
  border-radius: 30px;
  height:44pt;
  font-size:18pt;

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
  padding-top: 10px;
  top:0;
  width:200px !important;
  left:50%;;
  margin-left:-100px !important;
}

// Typography Goes here
.Main-Heading{
  position: relative;
  font-weight: 300;
  font-size: 28pt;
  word-spacing: 0.1rem;
  letter-spacing: 0.1rem;
  line-height:28pt;
  color: #000;
  opacity: 0.85;

}
.main-text{
  font-family: "San Francisco Display Thin";
  font-size: 16px;
  color: #000;
  opacity: 0.85;
  letter-spacing:0.6px;
  margin:20px auto !important;
  
}
.main-text strong{
   font-family: "San Francisco Display SemiBold";
}
.sub-text{
  font-size: 18px;
  color: #000;
  opacity: 0.85;
  position:absolute;
  bottom:6rem;
  letter-spacing:0.6px;
  left:0;
  right:0;
}

// Form Style Goes here
#Main-Form .field{
  position:relative;
  border-top: 1px solid rgb(216,216,216);
  border-bottom: 1px solid rgb(216,216,216);
  text-align:left;
  padding-left:20px;
  height:50px;
  .label{
    position: relative;
    display: inline;
    font-size: 16px;
    color: #000;
    letter-spacing:0.6px;
    opacity: 0.85;
    font-family: "San Francisco Display Thin", sans-serif;
  }
  .main-input{
    font-size: 16px;
    position: relative;
    font-family: "San Francisco Display Thin", sans-serif;
    display: inline-block;
    width: 50%;
    padding: 1rem;
    padding-left:0;
    background-color: transparent;
  }
}

#signup-form .field:nth-child(2){
  border-bottom: 1px solid rgb(216,216,216);
}
.ui.form .field{
  
  position:relative;
  border-top: 1px solid rgb(216,216,216);
  margin-bottom: 0;
  text-align:left;
  padding-left:20px;
  height:50px;
  .label{
    position: relative;
    font-family: "San Francisco Display Thin", sans-serif;
    display: inline-block !important;
    font-size: 16px;
    color: #000;
    opacity: 0.85;
    line-height: 17pt;
    padding:0.7em 0;
    letter-spacing:0.6px;
    
  }
  .main-input{
    font-size: 16px;
    line-height: 17pt;
    position: relative;
    display: inline-block;
    width: 60%;
    float:right;
    border:none;
    padding-left:0;
    background-color: transparent;
    letter-spacing:0.6px;
    
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
  font-family: "San Francisco Display Thin";
  width:60%;
  border:none;
  position: relative;
  display: inline-block;
  float:right;
  font-size:16px;
  padding: 1rem;
  padding-left:0;
  float: right;
  border:none;
  background-color: transparent;
}
// .ui.form .field > label{
//   display: inline-block;
//   font-size: 17pt;
//   color: #000;
//   opacity: 0.85;
//   line-height: 17pt;
// }
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
  font-family: "San Francisco Display Semibold";
  font-size: 18px;
  word-spacing: 0.1rem;
  color: #fff;
  opacity: 0.85;
  margin:20px 0;
  height:50px;
  letter-spacing:0.6px;

}
.btn-custom:focus{
  outline:none;
}

.complete-page{

  .Heading{
    position: relative;
    ffont-family: 'FFDINStdRegular', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    word-spacing: 0.1rem;
    color: #66a200;
    opacity: 0.85;
    margin-top: 0;
    margin-bottom: 0;
  }
  .main-text{
    ffont-family: 'FFDINStdRegular', sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: #000;
    opacity: 0.85;
  }
  .btn-custom{
    position: relative;
    word-spacing: 0;
    letter-spacing: 0.6px;
    color: #fff;
    opacity: 0.85;
  }
}

.error{
  display: block;
  float: right;
  color:red;
  width:60%;
  text-align:left;
}

.warning, .register{
  font-family: "San Francisco Display Thin";
  width:60%;
  float:right;
  color:#c9c4c2;
  text-align:left;
  padding-left:15px;
  font-size:15px;
  line-height:15pt;
}
.register{
  color:#c9c4c2;
  width:100%;
  font-size:13pt;
  text-align:center;
}
.ui.form input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
  background-color: transparent !important;
}

.ui.form input:not([type]), .ui.form input[type="email"], .ui.form input[type="number"], .ui.form input[type="password"], .ui.form input[type="tel"], .ui.form input[type="text"]{
  font-family: "San Francisco Display Thin" !important;
}


@media(min-width: 768px){
  h2{
    font-size: 33pt !important;
    line-height:33pt !important;
    margin-bottom:30px !important;
  }
  .Main-Heading{
    font-size: 36pt !important;
    line-height:36pt !important;

  }
  .main-text{
    font-size:20px;
    width:50%;
    margin:20px auto;
    margin-bottom:30px !important;
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
   
    .btn-custom{
      width:100%;
    }
  }
  .sub-text{
    bottom:3rem;
  }
}

`;
