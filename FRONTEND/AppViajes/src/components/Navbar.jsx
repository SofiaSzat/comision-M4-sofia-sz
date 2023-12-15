import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navbarra() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Hello World!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">LogIn</Nav.Link>
            <Nav.Link href="/newPost">Nuevo post</Nav.Link>
            <Nav.Link href="/registro">Registrate</Nav.Link>
                      </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarra;