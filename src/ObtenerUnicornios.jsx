import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './obtenerUnicornios.css';
import eliminarUnicornio from "./eliminarUnicornio";

function ObtenerUnicornios({url}) {
    const [data, setData] = useState(null);
    const [recargarUnicornios, setRecargarUnicornios] = useState(false)
    function validacion(evento){
        if(evento.target.id === 'eliminar'){
            setRecargarUnicornios(true)
        }; 
    }
    useEffect(() => {
        axios.get(url)
            .then((datos) => {
                setData(datos.data);
                setRecargarUnicornios(false)
            })
            .catch(error => {
                console.log(error);
            });
    }, [recargarUnicornios]);

    return (
        <Container>
            <Row>
                {data ? (
                    data.map((unicorn, index) => (
                        <Col key={index} className="mb-4">
                            <Card key={unicorn._id} style={{ width: '10rem', backgroundColor: "black" }}>
                                <Card.Img variant="top" src={unicorn.image} />
                                <Card.Body>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}>Nombre: {unicorn.name}</Card.Text>
                                    <Card.Text style={{ color: "white", textAlign: "center" }}>Edad: {unicorn.age}</Card.Text>
                                    <Card.Text style={{ color: "white", textAlign: "center", fontSize: ".7em" }}>Poder: "{unicorn.power}"</Card.Text>
                                    <div className="div">
                                        <Button as={Link} to={`/formulario/${unicorn._id}`} className="button" style={{ fontSize: ".6em" }}>Actualizar</Button>
                                        <Button id="eliminar" className="button" style={{ fontSize: ".6em" }} onClick={(e)=>{validacion(e), eliminarUnicornio(url, unicorn._id)}}>Eliminar</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <div className="cargando" style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Spinner animation="border" variant="primary" />
                    </div>
                )}
            </Row>
        </Container>
    );
}


export default ObtenerUnicornios;
