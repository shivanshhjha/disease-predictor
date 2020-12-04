import React, { useState, useEffect } from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, Navlogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn,NavBtnLink} from './NavbarElements'
const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)
    
    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        // fragments instead of div
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <Navlogo to="/" onClick={toggleHome}>
                        Disease
                    </Navlogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    {/* wrapper for the nav menu */}
                    <NavMenu>
                        
                        <NavItem>
                            <NavLinks to="covid"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-79}>
                                Covid-19
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="symtom"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-79}>
                                Symtom Checker
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-79}>
                                    About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-79}>
                                    Sign Up
                            </NavLinks>
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
