import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars, FaTimes, FaDatabase } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  let menu

  const barIcon = <Bars onClick={() => setShowMenu(!showMenu)} />;
  const closeIcon = <Close onClick={() => setShowMenu(!showMenu)} />

  if(showMenu){
    menu =
    <MobileMenu>
      {menuData.map((item, index) => (
        <>
            <MobileNavLink to={item.link} key={index}>
              {item.title}
            </MobileNavLink>
            {index < menuData.length-1 ? <MobileNavSeperator/> : ''}
        </>
          ))
        }
    </MobileMenu>
  }

  return (
    <>
      <Nav>
        <NavLink logo="true" to="/"><Logo /></NavLink>
        {showMenu ? closeIcon : barIcon}
        <NavMenu>
          {menuData.map((item, index) => (
            <>
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
            {index < menuData.length-1 ? <NavSeperator/> : ''}
            </>
          ))
        }
        </NavMenu>
        {/* <NavBtn>
          <Button primary="true" round="true" to="/contact">
          Contact
          </Button>
        </NavBtn> */}
      </Nav>
      {menu}
    </>
  )
}

export default Header

const MobileMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    z-index: 100;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    top: 80px;
    left: 0;
    width: 100%;
    height: 600px;
    background-color: #070b11;

    animation: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) slideInFromTop;
  }

  @keyframes slideInFromTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`

const MobileNavLink = styled(Link)`
  color: #FFF7EE;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 3rem;
  text-decoration: none;
  margin: 0.5rem 0;
  padding: 1.5rem 1.5rem;
  cursor: pointer;
  transition: 0.3s;
  /* border-radius: 30px; */

  &:hover {
    /* border-top: 1px solid #273C5C;
    border-bottom: 1px solid #273C5C; */
    border-left: 1px solid #273C5C;
    border-right: 1px solid #273C5C;
    transform: translateY(-2px);
  }
`

const MobileNavSeperator = styled.div`
  height: 1px;
  margin: 1rem 0 1rem 0;
  background-color: #FFF7EE;
  width: 25vw;
`

const NavSeperator = styled.div`
  /* margin-left: 2rem; */
  width: 1px;
  background-color: #FFF7EE;
  height: 50%;
`

const Nav = styled.nav`
  background: #070b11;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) /2);
  position: relative;
  box-shadow: 0px 0px 10px 0px #000;

  z-index: 200;
`

const NavLink = styled(Link)`
  color: #FFF7EE;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;

  /* Fade in */
  &::after {
    content: '';
    width: 0%;
    height: 0.1em;
    background: #5a8cdb;
    opacity: 0;
    transition: 300ms;
  }
  &:hover::after,
  &:focus::after {
    width: ${({logo}) => (logo ? '0' : '100%')};
    opacity: 1;
  }
`

const Logo = styled(FaDatabase)`
  font-size: 2rem;
  margin-right: 5px;
  transition: 0.1s;

  &:hover {
    color: #ffffff;
    font-size: 2.5rem;
  }
`

const Bars = styled(FaBars)`
  display: none;
  color: #FFF7EE;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const Close = styled(FaTimes)`
  display: none;
  color: #FFF7EE;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
    /* display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    justify-content: center;
    z-index: 1;
    transform: translateY(30px);
    background-color: #070b11; */
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
