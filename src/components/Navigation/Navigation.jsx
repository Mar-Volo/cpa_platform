import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavStyles } from "./GlobalNavStyles";
import "bootstrap/dist/css/bootstrap.min.css";

export const Navigation = () => {
  return (
    <Navbar className="nav-bar" data-bs-theme="dark">
      <Container className="nav-container">
        <Navbar.Brand className="logo" href="#home">
          Логотип
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className="nav-item" href="#home">
            Головна
          </Nav.Link>
          <Nav.Link className="nav-item" href="#features">
            Брендам
          </Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">
            Блогерам
          </Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">
            Робота
          </Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">
            Відгуки
          </Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">
            Блог
          </Nav.Link>
          <Nav.Link className="nav-item" href="#pricing">
            Контакти
          </Nav.Link>
        </Nav>
      </Container>
      <NavStyles />
    </Navbar>
  );
};
