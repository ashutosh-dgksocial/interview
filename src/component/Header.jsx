import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Navbar, Nav, Container } from 'react-bootstrap';
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import Group from '../assets/Group.webp';
import cart from '../assets/cart.webp';


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  const handleCloseBasket = () => setShowBasket(false);
  const handleShowBasket = () => setShowBasket(true);

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <>
      <div style={{ zIndex: '1', position: 'sticky', top: '0', }}>
        <div>
          <Navbar expand="lg" className="shadow" style={{ zIndex: '1', position: 'sticky', top: '0', background: 'white' }}>
            <Container fluid className="px-5 d-flex justify-content-between align-items-center">
              <Link className="navbar-brand" to="#">
                <img src={Group} alt="Teen Troops" height="50" />
              </Link>
              <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowMenu} />
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
              <Nav className="d-lg-flex gap-3"> {/* Show on large screens */}
                <Nav.Item style={{ borderRight: '1px solid black', borderColor: '#D3D3D3' }}>
                  <Link className="nav-link" to="#">
                    {/* First icon people */}
                    <IoPersonOutline size={24} onClick={handleShowCart} />
                  </Link>
                </Nav.Item>
                <Nav.Item style={{ borderRight: '1px solid black', borderColor: '#D3D3D3' }}>
                  <Link className="nav-link" to="/wishlist">
                    <CiHeart size={24} />
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="nav-link" to="#">
                    <BsCart2 size={24} onClick={handleShowBasket} />
                  </Link>
                </Nav.Item>
              </Nav>
            </Container>
          </Navbar>

          <Offcanvas show={showMenu} onHide={handleCloseMenu}>
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
        </div>

        {/* people offcanvas */}
        <div>
          <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="col-md-12 px-3">
                <div className="login-form">
                  <h2 className='text-center h3 text-secondary'>Login</h2>
                  <form>
                    <div className="form-group">
                      <input type="text" className="form-control rounded" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                      <input type="password" className="form-control rounded" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group py-3">
                      <a href="#" className="forgot-password text-secondary">Forgot Password</a>
                    </div>
                    <button type="submit" className="btn-hov btn border border-1 border-dark w-100 rounded">Login</button>
                    <button type="button" className="btn btn-dark w-100 mt-2 rounded">Continue With Google</button>
                  </form>
                  <div className="register-link text-start">
                    <p>Don't have an account? <a href="#">Register</a></p>
                    <p>Already registered? <span>Email not verified</span></p>
                  </div>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        {/* cart offcanvas */}
        <div>
          <Offcanvas show={showBasket} onHide={handleCloseBasket} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className='w-100 col-12 d-flex flex-column justify-content-center align-items-center'>
                <img src={cart} alt="cart" width='200' height='250' style={{ objectFit: 'cover' }} />
                <h3>Cart is empty</h3>
                <p>Look like you have no items in your shopping cart.</p>
              </div>

            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default Header;