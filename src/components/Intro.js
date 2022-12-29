import {Col,Container,Row,Button} from "react-bootstrap"

const Intro = () => {
  return (
    <div>
         <div className="intro">
          <Container className="text-center text-white d-flex justify-content-center align-items-center">
            <Row>
              <Col>
                <div className="title">Nonton Disini Aja...</div>
                <div className="intro-button mt-4 text-center">
                    <Button variant="dark">Lihat Semua List</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default Intro