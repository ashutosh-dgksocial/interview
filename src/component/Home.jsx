import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/slider (1).png"
import slider2 from "../assets/slider (2).png"
import slider3 from "../assets/slider (3).png"
import { Card, Col, Container, Row } from 'react-bootstrap';
import player1 from "../assets/players (1).png"
import player2 from "../assets/players (2).png"
import player3 from "../assets/players (3).png"

import beard4 from "../assets/beard (4).png"
import beard5 from "../assets/beard (5).png"
import beard6 from "../assets/beard (6).png"
import beard7 from "../assets/beard (7).png"
function Home() {
  return (
    <>
      <div className='myhome'>
        <div>
          <Carousel>
            <Carousel.Item>
              <img src={slider1} alt="slider1" style={{ width: "100%", objectFit: "cover" }} />

              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slider2} alt="slider2" style={{ width: "100%", objectFit: "cover" }} />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={slider3} alt="slider3" style={{ width: "100%", objectFit: "cover" }} />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* line  */}
        <div className='container py-3'>
          <h4>Categories</h4>
          <div className='d-flex align-items-center' style={{ background: '#ef6566', width: '8rem', height: '5px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '8rem', right: '', borderBottom: '2px solid grey', width: 'calc(100% + 50rem)' }}></div>
          </div>
          {/* player  */}

          <div className='d-flex justify-content-center gap-5 py-5'>
            <div className="mycard ">
              <Card className="my-card-shadow " style={{ width: '19rem', border: 'none', }}>
                <Card.Img variant="top" src={player3} style={{ borderRadius: '10px', height: '18rem', objectFit: 'cover', }} />
              </Card>
            </div>
            <div className="mycard ">
              <Card className="my-card-shadow" style={{ width: '19rem', border: 'none', }}>
                <Card.Img variant="top" src={player2} style={{ borderRadius: '10px', height: '18rem', objectFit: 'cover', }} />
              </Card>
            </div>
            <div className="mycard ">
              <Card className="my-card-shadow" style={{ width: '19rem', border: 'none', }}>
                <Card.Img variant="top" src={player1} style={{ borderRadius: '10px', height: '18rem', objectFit: 'cover', }} />
              </Card>
            </div>
          </div>
        </div>
        {/* box */}
        <Container className="bg-light py-5 border border-2 border-secondary">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center mb-4">Unbeatable Offers Await!</h1>
              <p className="text-center">Summer week's special discount</p>
              <h3 className="text-center">Get Exciting Offers! Use Code:</h3>
              <button variant="primary" className=" btn btn-light border border-secondary d-block mx-auto" size="lg">SUMMER50</button>
            </Col>
          </Row>
        </Container>

        <div className='container my-5'>
          <h4>Featured Products</h4>
          <div className='d-flex align-items-center' style={{ background: '#ef6566', width: '8rem', height: '5px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '8rem', right: '', borderBottom: '2px solid grey', width: 'calc(100% + 50rem)' }}></div>
          </div>
        </div>

        {/* my man */}
        <div className="d-flex gap-3 mt-2 justify-content-center align-items-center">

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '17rem', border: 'none', }}>
              <Card.Img variant="top" src={beard4} style={{ borderRadius: '10px', height: '18rem', objectFit: 'cover', }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '17rem', border: 'none', }}>
              <Card.Img variant="top" src={beard5} style={{ borderRadius: '10px', height: '18rem', objectFit: 'cover', }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '17rem', border: 'none', }}>
              <Card.Img variant="top" src={beard6} style={{ borderRadius: '10px', height: '18rem', objectFit: 'cover', }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '19rem', border: 'none', }}>
              <Card.Img variant="top" src={beard7} style={{ borderRadius: '10px', height: '18rem', objectFit: 'cover', }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>


        {/* last div */}
      </div>
    </>
  )
}

export default Home