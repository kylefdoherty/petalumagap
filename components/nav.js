import React, { Component } from 'react'
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
      borderBottom: 'solid 1px #3b55e6',
      margin: '0',
      minHeight: '4em',
    }

    return (
      <Navbar style={navBarStyles}>
        <NavbarBrand style={{ minHeight: '4em' }}>
          <NavbarItem>
            <img src="" style={{ marginRight: 5 }} />
            Petaluma Gap
          </NavbarItem>
          <NavbarBurger
            style={{ minHeight: '4em' }}
            isActive={this.state.menuIsOpen}
            onClick={this.toggleMenu}
          />
        </NavbarBrand>
        <NavbarMenu
          isActive={this.state.menuIsOpen}
        >
          <NavbarItem href='/'>Home</NavbarItem>
          <NavbarItem href='/wineries'>Wineries</NavbarItem>
        </NavbarMenu>
      </Navbar>
    )
  }
}

export default Nav
