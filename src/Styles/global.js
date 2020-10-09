import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/BebasNeue-Regular.ttf';
export const GlobalStyle = createGlobalStyle`

  @font-face{
    font-family: "BebasNeue";
    src: local('BebasNeue'), url(../assets/fonts/BebasNeue-Regular.ttf) format('truetype');
  }

  *, *:before, *:after{
    box-sizing: border-box;
    text-decoration: none;
  }

  body{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: Arial, serif;

        textarea:focus, input:focus, select:focus, button:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
  }
  
  button{
      cursor: pointer;
    }

    a {
      text-decoration: none;
      margin: 0;
    }
`;
