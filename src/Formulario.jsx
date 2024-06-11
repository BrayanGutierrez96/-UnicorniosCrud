import { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import ActualizarUnicornio from "./ActualizarUnicornio"
import CrearUnicornio from "./CrearUnicornio";


function Formulario({ url, title, nombreComponente }) {
    const urlUnicornio = url
    const [valorImg, setValorImg] = useState("")
    const [valorNombre, setValorNombre] = useState("")
    const [valorEdad, setValorEdad] = useState("")
    const [valorPoder, setValorPoder] = useState("")
    const [validadorActualizar, setValidadorActualizar] = useState(false)
    const [validadorCrear, setValidadorCrear] = useState(false)


    function obtenerValorImg(evento) {
        setValorImg(evento.target.value)
    }

    function obtenerValorNombre(evento) {
        setValorNombre(evento.target.value)
    }

    function obtenerValorEdad(evento) {
        setValorEdad(evento.target.value)
    }

    function obtenerValorPoder(evento) {
        setValorPoder(evento.target.value)
    }
    function btnActualizar() {
        if (valorImg && valorNombre && valorEdad && valorPoder !== "") {
            if(nombreComponente === 'crear'){
                setValidadorCrear(true)
            }else{
                setValidadorActualizar(true);
            }
        }
        else {
            alert("Completa todos los campos para para continuar");
        }
    }
    return (
        <>
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <Form style={{ padding: "10px" }}>
                <Row>
                    <Col className="col-sm-2 mb-2" style={{ alignContent: "center" }}>
                        <p style={{ margin: "0", padding: "0" }} >Url:</p>
                    </Col>
                    <Col className="col-sm-10 mb-2">
                        <Form.Control id="img" onChange={obtenerValorImg} type="text" placeholder="http://ejemplo.com" />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-2 mb-2" style={{ alignContent: "center" }}>
                        <p style={{ margin: "0", padding: "0" }} >Nombre:</p>
                    </Col>
                    <Col className="col-sm-10 mb-2">
                        <Form.Control id="nombre" onChange={obtenerValorNombre} type="text" placeholder="Ejemplo: Skyblue" />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-2 mb-2" style={{ alignContent: "center" }}>
                        <p style={{ margin: "0", padding: "0" }} >Edad:</p>
                    </Col>
                    <Col className="col-sm-10 mb-2">
                        <Form.Control id="edad" onChange={obtenerValorEdad} type="number" placeholder="Ejemplo: 22" />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-2 mb-2" style={{ alignContent: "center" }}>
                        <p style={{ margin: "0", padding: "0" }} >Poder:</p>
                    </Col>
                    <Col className="col-sm-10 mb-2">
                        <Form.Control id="poder" onChange={obtenerValorPoder} type="text" placeholder="Ejemplo: volar" />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-3"></Col>
                    <Col className="col-sm-6" style={{ display: "flex", justifyContent: "center" }}>
                        <Button className="button" style={{ fontSize: ".5em", width: "max-content" }} onClick={btnActualizar}>{title}</Button>
                    </Col>
                    <Col className="col-sm-3"></Col>
                </Row>
            </Form>
            {validadorActualizar ? <ActualizarUnicornio url={urlUnicornio} nombre={valorNombre} edad={valorEdad} poder={valorPoder} img={valorImg} /> : <></>}
            {validadorCrear ? <CrearUnicornio url={url} nombre={valorNombre} edad={valorEdad} poder={valorPoder} img={valorImg} /> : <></>}
            
        </>
    )
}


export default Formulario