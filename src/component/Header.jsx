import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Navbar, Nav, Container } from 'react-bootstrap';
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import Group from '../assets/Group.webp';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="shadow" style={{ zIndex: '1', position: 'sticky', top: '0', background: 'white' }}>
        <Container fluid className="px-5 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="#">
            <img src={Group} alt="Teen Troops" height="50" />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Collapse id="navbarNav" className="justify-content-center">
            <Nav className='gap-5'>
              <Nav.Item>
                <Link className="nav-link fw-semibold text-black" aria-current="page" to="/home">HOME</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link fw-semibold text-black" to="/">COMIC CON</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link fw-semibold text-black" to="/man">MEN'S</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link fw-semibold text-black" to="/women">WOMEN'S</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav className="d-lg-flex gap-3">
            <Nav.Item style={{ borderRight: '1px solid black', borderColor: '#D3D3D3' }}>
              <Link className="nav-link" to="#">
                <IoPersonOutline size={24} />
              </Link>
            </Nav.Item>
            <Nav.Item style={{ borderRight: '1px solid black', borderColor: '#D3D3D3' }}>
              <Link className="nav-link" to="/wishlist">
                <CiHeart size={24} />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="#">
                <BsCart2 size={24} />
              </Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Item>
              <Link className="nav-link fw-semibold text-black" aria-current="page" to="/home">HOME</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link fw-semibold text-black" to="/">COMIC CON</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link fw-semibold text-black" to="/man">MEN'S</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link fw-semibold text-black" to="/women">WOMEN'S</Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="#">
                <IoPersonOutline />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/wishlist">
                <CiHeart />
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="#">
                <BsCart2 />
              </Link>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
