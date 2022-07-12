import React from "react";
import styled, {
   Box,
   Logo,
   Menu,
   Item,
   Login,
   
} from "../../assets/styles/Navbar/StyledNavbarLanding";
import UseitLogo  from "../../assets/img/UseitLogo.svg";
import SidebarNav from '../Sidebar/SidebarNav';

const NavbarPage = () => {

  return (
    <>
      <Box>
        <Logo>
            <a href="/inicio">
                <img src={UseitLogo}
                />
            </a>
         </Logo>
         <SidebarNav/>
          <Menu>
              <Item><a href="/Serviços">Serviços</a></Item>
              <Item><a href="/sobrenos">Sobre nós</a></Item>
              <Item><a href="/contatos">Contatos</a></Item>
          </Menu>
            <Login>Entrar</Login>
      </Box>
    </>
  );
};

export default NavbarPage;
