import React, {useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu } from "./NavbarElements"


const Navbar = () => {
    const [click, setClick] = useState(false)
    // const [scroll, setScroll] = useState(false)
    
    const handleClick = () => setClick(!click)

    // const changeNav = () => {
    //     if (window.scrollY >= 80){
    //         setScroll(true)
    //     } else {
    //         setScroll(false)
    //     }
    // }
    
    // useEffect(() => {
    //     changeNav()
    //     window.addEventListener("scroll", changeNav)
    // }, [])


    return (
        <>
            <IconContext.Provider value={{color:"#141414"}}>
                <Nav click={click}>
                    <NavbarContainer>
                        <NavLogo to="/">
                            VOLTH
                            
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/gallery">Gallery</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/story">Story</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        
        </>

    )
}

export default Navbar