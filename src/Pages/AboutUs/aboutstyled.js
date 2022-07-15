import styled from "styled-components";

export const DivImage = styled.div `
 
    position: relative;
   

    @media(max-width: 760px){
        img{
            display:none;
        }
    }



`;

export const DivUl = styled.div `
 margin-top:20em;
 width: 100%;
 background: #ab8fcc;
h2{
    padding-top:2em;
}
ul{
    list-style:none;
}
  li{
    list-style-type: none;
    color: #130A1D;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 20px;
  }
  h2{
    color: #130A1D;
    margin-left: 25px;
  }
  

`;

export const DivLinks = styled.div `
text-align:center;
   h2{
    color: #130A1D;
    margin-top: 5%;
    font-weight: 500;
    font-size: 35px;

   }
  margin: 0 auto;
   box-shadow: 0px 11px 26px rgba(0, 0, 0, 0.11);
   border-radius: 15px;

   position: relative;
   margin-top:15em;
   width: 50vw;
   height: 50vh;
   background: #ab8fcc;
  


`;

export const Containerr = styled.div `

width: 100%;
max-width: 1110px;
margin: auto;
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: column;



`

export const ButtonAcsess = styled.button `

   width: 25%;
   height: 15%;
   border-radius: 35px;
   background: #130A1D;

   a{
    color: #fff;

   }

   a:hover{
     color:#130A1D;
   }
  
   :hover{
    background: #ab8fcc;
    transition: 0.2s;
    border: 0.5px solid #130A1D;
    color: #130A1D;

   }

`;

