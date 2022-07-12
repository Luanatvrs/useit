import { createGlobalStyle } from "styled-components";
import Bkground1 from '../../img/Ellipse1.svg';
import Bkground2 from '../../img/Ellipse2.svg';

const globalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
        
    }

     body, #root{
        height: 100vh;
        background: url(${Bkground2}) no-repeat 670px, url(${Bkground1}) no-repeat 620px;
        background-size:cover;
        @media(max-height: 590px){
            height: auto;
          }
    }
    
    button{
        backgroubd-color: none;
        border: none;
        outline: none;
    }

    a{
        text-decoration:none;
        outline:none;
    }

    @media(max-width: 2000px){
        body{
            background-color: #FAF8FF;
            
        }
    }
`
export default globalStyle;