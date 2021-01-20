import './App.css';
import {Container, Row, Navbar, Nav} from 'react-bootstrap'
import PageSection from './Components/PageSection'
import TypedText from './Components/TypedText'
import AboutSection from './Components/AboutSection'
import ExperienceSection from './Components/ExperienceSection'
import BodyOfWorkSection from './Components/BodyOfWorkSection'

function App() {
  return (
    <div className="App">
        <Navbar variant="dark" bg="dark" sticky="top">
          <Navbar.Brand href="#home">Theo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#bodyofwork">Body of Work</Nav.Link>
          </Nav>
      </Navbar>
      <p class="anchor" id="home"></p>
      <TypedText text="> Hello, I'm Theo Bayard de Volo." msSpeed="100" className="title"/>
      <Container fluid>
        <Row>
          <AboutSection/>
        </Row>
        <Row>
          <ExperienceSection/>
        </Row>
        <Row>
          <BodyOfWorkSection/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
