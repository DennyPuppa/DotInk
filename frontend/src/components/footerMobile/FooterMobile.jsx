import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSession from "../../hooks/useSession";
import './footermobile.css'


const FooterMobile = () => {

    const { session, decodedSession } = useSession()
    console.log(decodedSession);

    return (
        <footer className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <div className='d-flex justify-content-evenly'>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <i class="fa-solid fa-calendar"></i>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterMobile;