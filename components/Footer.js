import styles from './Footer.module.css'
import { Nav, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Navbar bg="transparent" data-bs-theme="light">
        
          <Nav className="me-auto">
            <Nav.Link href="#journal">Journal</Nav.Link>
            <Nav.Link href="#investigator">Investigator</Nav.Link>
          </Nav>

          <Navbar.Brand href="#" className={styles.brand}><img src="/favicon_gyg.png" alt="GYG Logo" className={styles.logo} /></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#neighborhood">Neighborhood</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
        </Nav>
      </Navbar>
      </footer>
    </>
  );
}
