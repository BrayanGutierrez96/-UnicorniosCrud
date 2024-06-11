import {Container, Navbar, Button} from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

function NavbarUnicorn(){
    const navegador = useNavigate()
    return(
        <Navbar bg="dark" data-bs-theme="dark" style={{marginBottom:"10px"}}>
        <Container>
          <Button variant='link' onClick={()=>{navegador(-1)}}><i className="bi bi-arrow-left"></i></Button>
          <Navbar.Brand as={Link} to={'/'}>App de unicornios</Navbar.Brand>
        </Container>
      </Navbar>
    )
}
export default NavbarUnicorn