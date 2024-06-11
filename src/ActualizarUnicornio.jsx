import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import UnicornioCard from "./UnicornioCard";
import { Spinner } from "react-bootstrap";
import './obtenerUnicornios.css';

function ActualizarUnicornio({ url, nombre, edad, poder, img }) {
    const { unicornioId } = useParams()
    const urlId = `${url}/${unicornioId}`
    const [unicornio, setUnicornio] = useState(null)
    let edadString = edad.toString()
    useEffect(() => {
        axios.put(urlId, {
            name: nombre,
            age: edadString,
            power: poder,
            image: img
        })
            .then(res => {
                console.log("unicornio Actualizado");
            })
            .catch(err => { console.log(err); })
    }, [])

    useEffect(() => {
        axios.get(urlId)
            .then(res => { setUnicornio(res.data); }
            )
            .catch(err => { console.log(err); }
            )
    })
    return (
        <>
            {unicornio ? <UnicornioCard unicornio={unicornio} /> : <div className="cargando" style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Spinner animation="border" variant="primary" />
            </div>}
        </>
    )
}

export default ActualizarUnicornio