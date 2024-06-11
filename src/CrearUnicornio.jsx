import { useEffect, useState } from "react"
import axios from "axios"
import UnicornioCard from "./UnicornioCard"
import { Spinner } from "react-bootstrap"
import './obtenerUnicornios.css';

function CrearUnicornio({ url, nombre, edad, poder, img }) {
    const nuevoUnicornio = {
        name: nombre,
        age: edad,
        power: poder,
        image: img
    }
    const [creado, setCreado] = useState(false);
    const [unicornio, setUnicornio] = useState(null)
    useEffect(() => {
        axios.post(url, nuevoUnicornio)
            .then(res => {
                setUnicornio(res.data)
                setCreado(true)
            })
            .catch(err => {
                console.log(err);
            })  
    }, [])
    return (
        <>
            {unicornio ? <UnicornioCard unicornio={unicornio} /> : <div className="cargando" style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Spinner animation="border" variant="primary" /></div>}
        </>
    )
}
export default CrearUnicornio