import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const styles = {
    color: '#0061ff',
    fontWeight: 'bold',
    cursor: 'pointer'
}

export function MiNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" fixed='top' style={{backgroundColor: 'rgb(0,0,0,0.85)'}}>
        <NavbarBrand style={styles} href="/">TheWall</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink style={styles}>Inicio</NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={styles}>Mensajes</NavLink>
            </NavItem>
            <NavItem>
                <NavLink style={styles}>Mi perfil</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
