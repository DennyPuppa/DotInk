import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/useSession';
import './navbar.css'


const NavbarInk = () => {
  const { session, decodedSession } = useSession()
  // console.log(decodedSession);

  return (
    <Navbar className='my-navbar' expand="lg">
      <Container fluid className='align-items-center'>
        <div className='d-flex align-items-center gap-1'>
          <i class="fa-solid fa-droplet nav-icon"></i>
          <Link className='nav-link' to="/"><p className='logo'>DotINK</p></Link>
        </div>

        {!decodedSession && (
          <div className="d-flex gap-1">
            <Link className='nav-link' to="/login"><button className='btn-login'>Login</button></Link>
            
          </div>
        )}

        {decodedSession && (
          <div className="d-flex align-items-center gap-3 d-md-none px-3">
            
            <i class="fa-solid fa-paper-plane nav-icon"></i>
            
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarInk;