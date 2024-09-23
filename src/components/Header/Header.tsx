import './Header.css';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
/**
 * 
 * @summary header with nav tabs and theme-toggling logo
 * @description  https://ivp-dev.github.io/react-bootstrap-sidebar-menu/
 */
const Header:React.FC = () => {
    return (
        <Container fluid id='header' className='navigation-bar'>
            <Navbar >
                <div id='spacer' className='.pe-5 .me-5'></div>
                <Nav className='me-auto '>
                    <Nav.Link className='no-print'><Link to=''>Introductory Hellfire</Link></Nav.Link>
                    <Nav.Link className='no-print'><Link to='projects'>Projects</Link></Nav.Link>
                    <Nav.Link className='no-print'><Link to='resume'>Resume</Link></Nav.Link>
                    <Nav.Link className='no-print'><Link to='misc'>Misc</Link></Nav.Link>
                </Nav>
                
            </Navbar>
        </Container>
    );
};
export default Header;