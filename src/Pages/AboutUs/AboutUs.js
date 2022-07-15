import React from "react";
import style,{

    Container,
    Main,
    PageContainer,
    Button,
    ColumnImage,
    Floatingdiv,
    Valuediv

} from '../LandingPage/StyledLandingPage';
import Navbar from '../../components/Navbar/navLanding';
import CivilImage from '../../assets/img/civil.png'
import {FcInTransit} from "react-icons/fc";
import { Navigate, Route, useNavigate } from "react-router-dom";
import image from '../../assets/img/mega-creator.png'
import  {DivImage, DivUl,DivLinks, Containerr, ButtonAcsess} from './aboutstyled.js'

const AboutUs = () => {

    return(
     <>
       <Containerr>
          <Navbar/>
          <Main>
            <PageContainer>
              <div style={{marginTop:'-5em', width:'90%'}}>
                <h2>A empresa Use.It é uma empresa que oferece a praticidade em alugar ou anunciar
                    equipamentos para o seu serviço, como ferramentas, tratores e britadeiras, 
                    tudo para o seu negócio. </h2>
              </div>
             
            </PageContainer>
            <DivImage>
                  <img src={image}/>
              </DivImage>
        
          </Main>
          <DivLinks>
             <div>
                <h2>Slides da apresentação da empresa</h2>
                <h3 style={{fontSize:'18px', marginTop: '5em'}}>Acesse os slides sobre o nosso projeto desenvolvido durante a disciplina.</h3>
             </div>           
       <div style={{marginTop: '5em', alignItems:'center', justifyContent:"center", height:'100%'}}>
           <ButtonAcsess>
            <a href="https://drive.google.com/drive/folders/1mfpb3tJPmEZCqTC_dC3X9S1klf-2FH3h?usp=sharing%27">Acessar</a>
            </ButtonAcsess>
       </div>
          </DivLinks>

        </Containerr>
        <DivUl>
   
   <div style={{marginBottom: '3em'}}>
       <h2>
           Equipe
       </h2>
   </div>
   <div style={{marginBottom: '30px'}}>
       <ul>
           <li>
           Pablo Henrique Silva Ribeiro
           </li>
           <li>
           Marcos Gilmario
           </li>
           <li>
             Arthur fernandes
           </li>
           <li>
             Luana Tavares
           </li>
           <li>
             kharlos Danyell
           </li>
           <li>
             Pedro Thomas
           </li>
           <li>
             Carlos Eduardo Viana
             </li>
       </ul>
       <div style={{marginTop:'15px', height:'100px'}}>
        
       </div>
   </div>
       
 

</DivUl>
     </>


    );
}

export default AboutUs;