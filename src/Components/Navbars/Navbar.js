import '../../Assets/CSS/navbar.scss';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';



const Navigation = (props) => {
  const { isAuth } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authNavbar = () => {
    return (
      <Navbar
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-color"
        // style={{ backgroundColor: "black", color: "red" }}
        expand="md">
        <NavbarBrand tag={Link} to="/"><img className="logo_navbar" src="./LogoEMRHColor.png" alt="La imagen no existe o cambió su ubicación"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="container-fluid flexnav">
            <Nav className="" navbar>
              <NavItem>
                <NavLink tag={Link} to="/logout">
                  <Button className='boton_registro'>LogOut</Button>
                </NavLink>
              </NavItem>
              {/* <Button type="button" className="boton_registro btn btn-success my-2" tag={Link} to="/login">Register</Button> */}
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    )
  }

  const publicNavbar = () => {
    return (
      <Navbar
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light navbar-color"
        // style={{ backgroundColor: "black", color: "red" }}
        expand="md">
        <NavbarBrand tag={Link} to="/"><img className="logo_navbar" src="./LogoEMRHColor.png" alt="La imagen no existe o cambió su ubicación"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="container-fluid flexnav">
            <Nav className="" navbar>
              <NavItem>
                <NavLink tag={Link} to="/register" >
                  <Button className='boton_registro'>Register</Button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/login" >
                  <Button className='boton_registro'>LogIn</Button>
                </NavLink>
              </NavItem>
              {/* <Button type="button" className="boton_registro btn btn-success my-2" tag={Link} to="/login">Register</Button> */}
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    )
  }

  const renderNavigation = () => {
    return isAuth
      ? authNavbar()
      : publicNavbar()
  }

  return (
    <React.Fragment>
      {renderNavigation()}
    </React.Fragment>
  );
}

export default Navigation;