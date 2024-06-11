import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './obtenerUnicornios.css';


function UnicornioCard({ unicornio }) {
    return (
        <>
            <Container>
                <Row>
                    <Col className="mb-4 sm-3"/>
                    <Col className="mb-4 sm-4">
                        <Card key={unicornio._id} style={{ width: '10rem', backgroundColor: "black" }}>
                            <Card.Img variant="top" src={unicornio.image} />
                            <Card.Body>
                                <Card.Text style={{ color: "white", textAlign: "center" }}>Nombre: {unicornio.name}</Card.Text>
                                <Card.Text style={{ color: "white", textAlign: "center" }}>Edad: {unicornio.age}</Card.Text>
                                <Card.Text style={{ color: "white", textAlign: "center", fontSize: ".7em" }}>Poder: "{unicornio.power}"</Card.Text>
                            </Card.Body>
                            <div className="div">
                            <Button as={Link} to={'/'} className =" mb-4"style={{ fontSize: ".5em", textAlign:"center" , width: "max-content"}}>Guardar Cambios</Button>
                            </div>
                        </Card>
                    </Col>
                    <Col className="mb-4 sm-3"/>
                </Row>
            </Container>
        </>
    )
}

export default UnicornioCard