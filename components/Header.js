import styles from './Header.module.css'

import { Nav, Navbar } from 'react-bootstrap'

export default function Header() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Navbar.Brand href="#" className={styles.brand}>Gauge Your Garden</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#journal">Journal</Nav.Link>
            <Nav.Link href="#neighborhood">Neighborhood</Nav.Link>
            <Nav.Link href="#investigator">Investigator</Nav.Link>
        </Nav>
      </Navbar>
      
    </>
  );
}
