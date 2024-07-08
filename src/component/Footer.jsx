import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaPinterestP, FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';
import Group from '../assets/Group.webp'; // Update the path to your image file
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="bg-light py-4">
        <Container>
          <Row className='my-5'>
            <Col md={3} className="mb-3 mb-md-0">
              <img src={Group} alt="Teen Troops" height="50" />
              <div className="d-flex mt-4 text-secondary">
                <FaFacebookF className="me-3 text-secondary" size={21} />
                <FaPinterestP className="me-3 text-secondary" size={21} />
                <FaInstagram className="me-3 text-secondary" size={21} />
                <FaTwitter className="me-3 text-secondary" size={21} />
                <FaGlobe size={21} />
              </div>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <h5>HELP & INFO</h5>
              <ul className="list-unstyled">
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>CONTACT US</Link></li>
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>ABOUT US</Link></li>
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>GET IN TOUCH</Link></li>
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>TRACK ORDER</Link></li>
              </ul>
            </Col>
            <Col md={3} className="mb-3 mb-md-0">
              <h5>OUR POLICIES</h5>
              <ul className="list-unstyled">
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>PRIVACY POLICY</Link></li>
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>RETURN POLICY</Link></li>
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>REFUND POLICY</Link></li>
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>TERMS OF SERVICE</Link></li>
                <li><Link to="#" style={{ color: 'gray', textDecoration: 'none' }}>TERMS AND CONDITIONS</Link></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>OUR SERVICES</h5>
              <p>With utmost dedication, we seamlessly deliver these treasures to every corner of the globe, ensuring a hassle-free and delightful experience for all.</p>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className=' align-items-center justify-content-between d-flex m-auto px-5 py-5 text-secondary fw-bold'>
        <div>© 2024 Teen Troops. All Rights Reserved.</div>
        <div>Powered By Software Unicorn</div>
      </div>
    </>
  );
};

export default Footer;