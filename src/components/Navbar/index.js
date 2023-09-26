import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './Navbarelements'

const Navbar = ( {toggle}) => {
    return (
       <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='home'>Solar System</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about '>About</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='discover'>Discover</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='services'>Events</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='sign-up'>sign up</NavLinks>
                     </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin">Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>

       </>
    )
}

export default Navbar