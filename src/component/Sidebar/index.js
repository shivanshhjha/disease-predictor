import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper >
                <SidebarMenu>
                    <SidebarLink to="covid" onClick={toggle}>
                        Covid-19
                    </SidebarLink>
                    <SidebarLink to="symtom" onClick={toggle}>
                        Symtom Checker
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>
                    About
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        SignUp
                    </SidebarLink> 
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>
                        SignIn 
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
