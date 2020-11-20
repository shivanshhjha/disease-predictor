import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn,NavBtnLink} from './NavbarElements'
const Navbar = ({toggle}) => {
    return (
        // fragments instead of div
        <>
            <Nav>
                <NavbarContainer>
                    <Navlogo to="/">
                        Disease
                    </Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    {/* wrapper for the nav menu */}
                    <NavMenu>
                        
                        <NavItem>
                            <NavLinks to="covid">Covid-19</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="symtom">Symtom Checker</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
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
