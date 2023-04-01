import Link from 'next/link';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navbar.module.css';

function NavScrollExample() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <Navbar expand="lg" fixed="top" className={styles.navbar}>
          <Container>
            <Navbar.Brand className={styles.link}>
              Renewable Resources
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Nav>
                  <Nav.Link>
                    <Link className={styles.link} href={'/'}>
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className={styles.link} href={'/about'}>
                      About
                    </Link>
                  </Nav.Link>
                </Nav>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavScrollExample;
