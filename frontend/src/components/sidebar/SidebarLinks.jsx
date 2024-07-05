import useSession from "../../hooks/useSession";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './sidebarLinks.css'


const SidebarLinks = () => {

    const { session, decodedSession } = useSession()

    const navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('token');
        navigate('/start');
    }

    return (
        <div className="side-link d-flex flex-column gap-2 pb-2">
            <hr />
            <Link to="/">
                <button className="btn-sidelinks">
                <div className="side-link d-flex align-items-center gap-3">
                    <i class="fa-solid fa-house"></i>
                    <p className="m-0">Feed</p>
                </div>
                </button>
            </Link>
            <button className="btn-sidelinks">
            <div className="d-flex align-items-center gap-3">
                <i class="fa-solid fa-paper-plane"></i>
                <p className="m-0">Messages</p>
            </div>
            </button>
            <button className="btn-sidelinks">
            <div className="d-flex align-items-center gap-3">
                <i class="fa-solid fa-bell"></i>
                <p className="m-0">Notifications</p>
            </div>
            </button>
            <button className="btn-sidelinks">
            <div className="d-flex align-items-center gap-3">
                <i class="fa-solid fa-calendar"></i>
                <p className="m-0">Calendar</p>
            </div>
            </button>

            <hr />
            <button className="btn-sidelinks">
            <div className="d-flex align-items-center gap-3">
                <i class="fa-solid fa-gear"></i>
                <p className="m-0">Settings</p>
            </div>
            </button>
            <button onClick={signOut} className="btn-sidelinks">
            <div className='d-flex align-items-center gap-3'>
                <i class="fa-solid fa-right-to-bracket"></i>
                <p>Sign Out</p>
            </div>
            </button>
        </div>
    )
}

export default SidebarLinks;