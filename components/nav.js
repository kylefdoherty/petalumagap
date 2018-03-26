import React, { Component } from 'react'
import Link from 'next/link'
import {
  Button,
  Container,
  Icon,
  Field,
  Control,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarDivider,
  NavbarDropdown,
  NavbarEnd,
  NavbarItem,
  NavbarLink,
  NavbarMenu,
  NavbarStart,
} from 'bloomer'


class Nav extends Component {
  state = {
    menuIsOpen: false,
  }

  toggleMenu = () => {
    this.setState((prevState, props) => ({
      menuIsOpen: !prevState.menuIsOpen
    }))
  }

  render() {
    const navBarStyles = {
      margin: '0',
      minHeight: '4em',
      background: 'white',
    }

    const logoStyles = {
      marginRight: '5px',
      marginLeft: '10px',
      fontSize: '24px',
      textTransform: 'uppercase',
      fontWeight: 'bolder',
    }

    return (
      <Navbar style={navBarStyles}>
        <NavbarBrand style={{ minHeight: '4em' }}>
          <NavbarItem style={logoStyles}>
            <img src="" />
            Petaluma Gap
          </NavbarItem>
          <NavbarBurger
            style={{ minHeight: '4em' }}
            isActive={this.state.menuIsOpen}
            onClick={this.toggleMenu}
          />
        </NavbarBrand>
        <NavbarMenu
          style={{ background: 'white' }}
          isActive={this.state.menuIsOpen}
        >
          <Link prefetch href="/">
            <NavbarItem>Home</NavbarItem>
          </Link>
          <Link prefetch href="/wineries">
            <NavbarItem>Wineries</NavbarItem>
          </Link>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Nav
