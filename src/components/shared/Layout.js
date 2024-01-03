import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Layout(props) {
    return <>
     <Navbar expand="lg" bg='primary' variant='dark'>
        
      <Container>
        <Navbar.Brand href="#home">Add_villas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
      </Container>
    </Navbar>
    <h1>{props.children}</h1>
    </>
}
export default Layout;