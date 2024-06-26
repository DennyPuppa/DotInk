import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'


const NavbarInk = () => {


  return (
    <Navbar className='my-navbar' expand="lg">
      <Container fluid className='align-items-center px-lg-5'>
        <div className='d-flex align-items-center gap-1'>
          <i class="fa-solid fa-droplet"></i>
          <div className='playwrite-nz'><Link className='nav-link' to="/">.Ink</Link></div>
        </div>

        <p className='d-none d-md-flex caveat'>#Be Unique</p>

        <div className="d-flex gap-1">
          <Link className='nav-link' to="/login"><button className='btn-login'>Login</button></Link>
          <Link className='nav-link' to="/registrazione"><button className='btn-registration'>Registrati</button></Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarInk;