import styles from './Footer.module.css'
import { Nav, Navbar } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Navbar bg="white" data-bs-theme="light">
        
          <Nav className="me-auto">
            <Nav.Link href="#journal"><i class="bi bi-journal"></i></Nav.Link>
            <Nav.Link href="#investigator"><i class="bi bi-search"></i></Nav.Link>
          </Nav>

          <Navbar.Brand href="#" className={styles.brand}><img src="/favicon_gyg.png" alt="GYG Logo" className={styles.logo} /></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="#neighborhood"><i class="bi bi-houses"></i></Nav.Link>
            <Nav.Link href="#profile"><i class="bi bi-person-circle"></i></Nav.Link>
        </Nav>
      </Navbar>
      </footer>
    </>
  );
}
