import styles from './Footer.module.css'
import { Nav, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Navbar bg="white" data-bs-theme="light">
        
          <Nav className="me-auto">
            <Nav.Link href="#journal"><i className="bi bi-journal"></i></Nav.Link>
            <Nav.Link href="#investigator"><i className="bi bi-search"></i></Nav.Link>
          </Nav>

          <Navbar.Brand href="#" className={styles.brand}><img src="/favicon_gyg.png" alt="GYG Logo" className={styles.logo} /></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#neighborhood"><i className="bi bi-houses"></i></Nav.Link>
            <Nav.Link href="#profile"><i className="bi bi-person-circle"></i></Nav.Link>
          </Nav>
      </Navbar>
      </footer>
    </>
  );
}
