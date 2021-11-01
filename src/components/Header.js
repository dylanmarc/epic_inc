import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars, FaDatabase } from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from "./Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/"><Logo /></NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
            {index < menuData.length-1 ? <NavSeperator/> : ''}
          </NavLink>
        ))
        }
      </NavMenu>
      {/* <NavBtn>
        <Button primary="true" round="true" to="/contact">
          Contact
        </Button>
      </NavBtn> */}
    </Nav>
  )
}

export default Header

const NavSeperator = styled.div`
  margin-left: 2rem;
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
  z-index: 100;
  position: relative;
  box-shadow: 0px 0px 10px 0px #000;
`

const NavLink = styled(Link)`
  color: #FFF7EE;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    text-decoration: underline;
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

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
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
