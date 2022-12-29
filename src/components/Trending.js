import { Card, Container, Row, Col, Image } from "react-bootstrap";
import duneImage from "../asset/images/trending/dune.jpg";
import infiniteImage from "../asset/images/trending/infinite.jpg";
import jokerImage from "../asset/images/trending/joker.jpg";
import lightyearImage from "../asset/images/trending/lightyear.jpg";
import morbiusImage from "../asset/images/trending/morbius.jpg";
import everythingImage from "../asset/images/trending/everything.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Trending</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className=" movieImage">
              <Image src={duneImage} alt="Dune" className="image" />
              <div className="bg-dark ">
                <div className="text-white p-2 m-2">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={jokerImage} alt="Dune" className="image" />
              <div className="bg-dark ">
                <div className="text-white p-2 m-2">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={lightyearImage} alt="Dune" className="image" />
              <div className="bg-dark ">
                <div className="text-white p-2 m-2">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={infiniteImage} alt="Dune" className="image" />
              <div className="bg-dark ">
                <div className="text-white p-2 m-2">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={everythingImage} alt="Dune" className="image" />
              <div className="bg-dark ">
                <div className="text-white p-2 m-2">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={morbiusImage} alt="Dune" className="image" />
              <div className="bg-dark ">
                <div className="text-white p-2 m-2">
                  <Card.Title className="text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
