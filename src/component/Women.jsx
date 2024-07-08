import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import "./input.css"
import { IoIosSearch } from "react-icons/io";
import girl1 from "../assets/girl (1).png"
import girl2 from "../assets/girl (2).png"
import girl3 from "../assets/girl (3).png"
import girl4 from "../assets/girl (4).png"
import girl5 from "../assets/girl (5).png"
import girl6 from "../assets/girl (6).png"
import girl7 from "../assets/girl (7).png"
import girl8 from "../assets/girl (8).png"
import girl9 from "../assets/girl (9).png"
import girl10 from "../assets/girl (10).png"
import girl11 from "../assets/girl (11).png"



function Man() {
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
              <Card.Img variant="top" src={girl1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl2} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl5} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl6} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl7} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl8} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl9} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl10} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl11} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl5} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl6} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={girl3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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

export default Man