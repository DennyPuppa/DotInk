import useSession from "../../hooks/useSession";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import './sidebarLinks.css'


const SidebarLinks = () => {

    const { session, decodedSession } = useSession()

    return (
                        <div className="side-link d-flex flex-column gap-2">
                            <div className="side-link d-flex align-items-center gap-3">
                                <i class="fa-solid fa-house"></i>
                                <p className="m-0">Feed</p>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-paper-plane"></i>
                                <p className="m-0">Messages</p>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-bell"></i>
                                <p className="m-0">Notifications</p>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-calendar"></i>
                                <p className="m-0">Calendar</p>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-gear"></i>
                                <p className="m-0">Settings</p>
                            </div>
                        </div>
    )
}

export default SidebarLinks;