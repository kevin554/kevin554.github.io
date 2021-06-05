import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActorsTable from '../components/actors-table';

export default function Home() {  
  return <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="w-100">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
      <Navbar.Brand href="#home" className="mr-auto">React-Bootstrap</Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Container>
      <main>
        <ActorsTable />
      </main>
    </Container>
    <footer>
    </footer>
  </>
}
