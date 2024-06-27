import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSession from "../../hooks/useSession";
import './footermobile.css'


const FooterMobile = () => {

    const { session, decodedSession } = useSession()
    // console.log(decodedSession);

    return (
        <footer className='container-fluid py-3'>
            <div className="row">
                <div className="col-12">
                    <div className='d-flex justify-content-evenly align-items-center'>
                        <Link className='nav-link' to="/"><i class="fa-solid fa-house footer-icon"></i></Link>
                        <i class="fa-solid fa-paper-plane footer-icon"></i>
                        <div className='logo-footer'>
                            <Link className='nav-link' to={decodedSession ? "/post/create" : "/login"}><i class="fa-solid fa-droplet footer-icon"></i></Link>
                        </div>
                        <i class="fa-solid fa-calendar footer-icon"></i>
                        {!decodedSession && (<Link className='nav-link' to="/login"><i class="fa-solid fa-user footer-icon"></i></Link>)}
                        {decodedSession && (
                            <Link to="/account">
                                <div className='footer-avatar-picture'>
                                    <img className='rounded-circle' src={decodedSession.avatar} alt="" />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterMobile;