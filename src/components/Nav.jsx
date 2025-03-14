import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary py-3">
        <Container>
        <Link className="navbar-brand" to="/">Courses App</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/create">
                Create Course
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/class">
                Class
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navigation;
