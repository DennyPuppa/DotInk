import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSession from '../../hooks/useSession';
import './navbar.css'


const NavbarInk = () => {
  const { session, decodedSession } = useSession()
  // console.log(decodedSession);

  return (
    <Navbar className='my-navbar' expand="lg">
        <div className='d-flex align-items-center gap-1 px-2 px-md-0'>
          <i class="fa-solid fa-droplet nav-icon"></i>
          <Link to="/"><p className='logo'>DotINK</p></Link>
        </div>

        {!decodedSession && (
          <div className="d-flex gap-1">
            <Link to="/login"><button className='btn-login'>Login</button></Link>
            
          </div>
        )}

        {decodedSession && (
          <div className="d-flex align-items-center gap-3 d-md-none px-3">
            
            <i class="fa-solid fa-paper-plane nav-icon"></i>
            
          </div>
        )}
    </Navbar>
  );
}

export default NavbarInk;