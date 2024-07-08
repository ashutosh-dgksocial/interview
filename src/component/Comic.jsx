import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import "./input.css"
import { IoIosSearch } from "react-icons/io";
import img1 from "../assets/man (1).png"
import img2 from "../assets/man (2).png"
import img3 from "../assets/man (3).png"
import img4 from "../assets/man (4).png"
import secondimg1 from "../assets/secondimg (1).png"
import secondimg2 from "../assets/secondimg (2).png"
import secondimg3 from "../assets/secondimg (3).png"
import secondimg4 from "../assets/secondimg (4).png"


function Comic() {
  return (
    <>
      <div className="my-5 mx-5">
        <div style={{ display: 'flex', width: '30%', alignItems: 'center', border: '1px solid #e5eaee', padding: '10px 10px' }}>
          <input
            type="text"
            placeholder="Search for items..."
            style={{ border: 'none', outline: 'none', marginLeft: '5px', flex: '1' }}
          />
          <IoIosSearch size={24} style={{ color: 'grey' }} />
        </div>

        {/* section 1 */}
        <div className="d-flex gap-3 mt-5">

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '19rem', border: 'none', }}>
              <Card.Img variant="top" src={img4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={img3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={img2} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={img1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

        {/* section 2 */}
        <div className="d-flex gap-3 mt-2">

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '19rem', border: 'none', }}>
              <Card.Img variant="top" src={secondimg1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={secondimg2} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={secondimg3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={secondimg4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

        {/* section 3 */}
        <div className="d-flex gap-3 mt-2">

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '19rem', border: 'none', }}>
              <Card.Img variant="top" src={img4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={img3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={img2} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={img1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

        {/* section 4 */}
        <div className="d-flex gap-3 mt-2">

          <div className="mycard ">
            <Card className="my-card-shadow" style={{ width: '19rem', border: 'none', }}>
              <Card.Img variant="top" src={secondimg1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={secondimg2} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={secondimg3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={secondimg4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
              <Card.Body>
                <Card.Text>
                  Spider Man Print T-Shirt.
                </Card.Text>
                <Card.Text variant="primary"><del className="text-secondary me-2"><span>₹999</span></del> ₹599</Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

      </div>
    </>
  )
}

export default Comic