import { Button, Container, Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import ObtenerUnicornios from "./ObtenerUnicornios"
import Formulario from "./Formulario"
import "./home.css"
import NavbarUnicorn from "./NavbarUnicorn"
function Buttons(){
    return(
        <div className="contenedor">
            <div className="contenedor__contenedor-botones">
            <Button as={Link} to="/obtener-unicornios">Mostrar Unicornios</Button>
            <Button as={Link} to="/crear-unicornio">Crear Unicornios</Button>
            </div>
        </div>
     
    )

}

function Home(){
    const url = "https://experimental-unicorns-experimental-org.koyeb.app/api/v1/unicorns"
    return(
        <Router>
            <NavbarUnicorn/>
            <Routes>
                <Route path="/" element={<Buttons/>}/>
                <Route path="/obtener-unicornios" element={<ObtenerUnicornios url={url}/>}/>
                <Route path="/formulario/:unicornioId" element={<Formulario url={url} title={"Actualizar Unicornio"}/>}/>
                <Route path="/crear-unicornio" element={<Formulario url={url} title={'Crear Unicornio'} nombreComponente={'crear'}/>}/>

            </Routes>
        </Router>
    )
}

export default Home