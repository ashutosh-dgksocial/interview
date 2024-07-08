import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assets/slider (1).png"
import slider2 from "../assets/slider (2).png"
import slider3 from "../assets/slider (3).png"
function Home() {
  return (
    <>
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
    </>
  )
}

export default Home