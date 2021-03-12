import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, 
        NavbarCointainer, 
        NavLogo,
        MobileIcon, 
        NavMenu,
        NavItem, 
        NavLinks,
        NavBtn,
        NavBtnLink 
    } from './NavbarElements'; 


const Navbar = () => {
    return (
<>
<Nav>
    <NavbarCointainer>
        <NavLogo to='/'> conscire </NavLogo>
        <MobileIcon>
            <FaBars />
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to="about">Sobre</NavLinks>
            </NavItem>

            <NavItem>
                <NavLinks to="discover">Descubra!</NavLinks>
            </NavItem>

            <NavItem>
                <NavLinks to="contact">Contato</NavLinks>
            </NavItem>

            <NavItem>
                <NavLinks to="signup">Cadastre-se</NavLinks>
            </NavItem>
        </NavMenu>
        
        <NavBtn>
            <NavBtnLink to="/signin">Login</NavBtnLink>
        </NavBtn>

</NavbarCointainer>
</Nav>
</>
    )
}

export default Navbar
