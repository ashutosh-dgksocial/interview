import { Button, Card, FormControl, InputGroup } from "react-bootstrap";
import "./input.css"
import { IoIosSearch } from "react-icons/io";
import beard1 from "../assets/beard (1).png"
import beard2 from "../assets/beard (2).png"
import beard3 from "../assets/beard (3).png"
import beard4 from "../assets/beard (4).png"
import beard5 from "../assets/beard (5).png"
import beard6 from "../assets/beard (6).png"
import beard7 from "../assets/beard (7).png"
import beard8 from "../assets/beard (8).png"


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
              <Card.Img variant="top" src={beard1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard2} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard5} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard6} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard7} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard8} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard5} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard6} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard7} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard4} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard3} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard2} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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
              <Card.Img variant="top" src={beard1} style={{ borderRadius: '0px', height: '18rem', objectFit: 'cover', padding: '1rem' }} />
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