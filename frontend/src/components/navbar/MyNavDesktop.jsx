import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSession from "../../hooks/useSession";
import './navbar.css'


const NavbarInk = () => {

    const { session, decodedSession } = useSession()
    console.log(decodedSession);

    return (
        <nav className='my-navbar' expand="lg">
            <Container fluid className='px-lg-5'>
                <div className='d-flex gap-2 justify-content-center align-items-baseline'>
                    <i class="fa-solid fa-droplet"></i>
                    <div className='playwrite-nz'><Link className='nav-link' to="/">.Ink</Link></div>
                    <p className='d-none d-md-flex caveat'>#Be Unique</p>
                </div>

                {!decodedSession && (
                    <div className="d-flex gap-1">
                        <Link className='nav-link' to="/login"><button className='btn-login'>Login</button></Link>
                        <Link className='nav-link' to="/registrazione"><button className='btn-registration'>Registrati</button></Link>
                    </div>
                )}
            </Container>
        </nav>
    );
}

export default NavbarInk;