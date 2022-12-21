import { createGlobalStyle } from 'styled-components';
import { fontFamily } from './fonts';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.cdnfonts.com/css/heading-now-trial');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import url('https://fonts.googleapis.com/css2?family=Cormorant');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: ${fontFamily.primaryFont};
  caret-color: transparent;
}

  input, textarea {
    caret-color: white !important;
  }
  
  html{
    -webkit-tap-highlight-color: transparent;
  }
  
h1,h2,h3,h4,h5,h6,span,p {
cursor: default
}
  
  body{
    background-color: black;
  }

`;

export default GlobalStyles;
